/**
 * Cave Diver - Multiplayer Server
 * Server-authoritative game with Socket.io
 */

import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// ============================================
// GAME CONFIGURATION
// ============================================
const CONFIG = {
  TICK_RATE: 30,
  PLAYER_SPEED: 8,
  CROUCH_SPEED: 4,
  OXYGEN_DEPLETION_RATE: 2, // per second
  MAX_OXYGEN: 100,
  MAX_HEALTH: 100,
  BACKPACK_SIZE: 10,
  CAVE_SIZE: 100,
  ORE_COUNT: 30,
  MONSTER_COUNT: 5,
  SOUND_RADIUS_STANDING: 25,
  SOUND_RADIUS_CROUCHING: 8,
  MONSTER_DETECTION_RADIUS: 30,
  MONSTER_ATTACK_RANGE: 3,
  MONSTER_SPEED: 5,
  GOLD_ORE_VALUE: 50,
  OXYGEN_REFILL_COST: 30,
  OXYGEN_REFILL_AMOUNT: 40,
};

// ============================================
// ITEM CLASSES
// ============================================
const ItemTypes = {
  GOLD_ORE: 'gold_ore',
  OXYGEN_REFILL: 'oxygen_refill'
};

const ItemDefinitions = {
  [ItemTypes.GOLD_ORE]: {
    name: 'Gold Ore',
    type: ItemTypes.GOLD_ORE,
    sellValue: CONFIG.GOLD_ORE_VALUE,
    description: 'Valuable gold ore from the cave'
  },
  [ItemTypes.OXYGEN_REFILL]: {
    name: 'Oxygen Refill',
    type: ItemTypes.OXYGEN_REFILL,
    buyCost: CONFIG.OXYGEN_REFILL_COST,
    useValue: CONFIG.OXYGEN_REFILL_AMOUNT,
    description: 'Restores oxygen supply'
  }
};

// ============================================
// PROCEDURAL CAVE GENERATION
// ============================================
class CaveGenerator {
  constructor() {
    this.ores = [];
    this.walls = [];
  }

  generate() {
    this.ores = [];
    this.walls = [];
    
    // Generate ore nodes
    for (let i = 0; i < CONFIG.ORE_COUNT; i++) {
      const x = (Math.random() - 0.5) * CONFIG.CAVE_SIZE;
      const z = (Math.random() - 0.5) * CONFIG.CAVE_SIZE;
      this.ores.push({
        id: `ore_${i}`,
        type: ItemTypes.GOLD_ORE,
        position: { x, y: 0, z },
        mined: false
      });
    }

    // Generate cave walls (perimeter + random obstacles)
    const wallPositions = [
      { x: -CONFIG.CAVE_SIZE / 2, z: 0, width: 5, depth: CONFIG.CAVE_SIZE },
      { x: CONFIG.CAVE_SIZE / 2, z: 0, width: 5, depth: CONFIG.CAVE_SIZE },
      { x: 0, z: -CONFIG.CAVE_SIZE / 2, width: CONFIG.CAVE_SIZE, depth: 5 },
      { x: 0, z: CONFIG.CAVE_SIZE / 2, width: CONFIG.CAVE_SIZE, depth: 5 }
    ];

    // Add random wall obstacles
    for (let i = 0; i < 15; i++) {
      wallPositions.push({
        x: (Math.random() - 0.5) * CONFIG.CAVE_SIZE * 0.8,
        z: (Math.random() - 0.5) * CONFIG.CAVE_SIZE * 0.8,
        width: 3 + Math.random() * 8,
        depth: 3 + Math.random() * 8
      });
    }

    this.walls = wallPositions;

    return { ores: this.ores, walls: this.walls };
  }
}

// ============================================
// STEALTH MONSTER SYSTEM
// ============================================
class Monster {
  constructor(id) {
    this.id = id;
    this.position = {
      x: (Math.random() - 0.5) * CONFIG.CAVE_SIZE * 0.7,
      y: 0,
      z: (Math.random() - 0.5) * CONFIG.CAVE_SIZE * 0.7
    };
    this.state = 'roaming'; // roaming, chasing, attacking
    this.targetPlayer = null;
    this.lastSoundPosition = null;
    this.wanderTarget = this.getRandomWanderTarget();
  }

  getRandomWanderTarget() {
    return {
      x: (Math.random() - 0.5) * CONFIG.CAVE_SIZE * 0.7,
      y: 0,
      z: (Math.random() - 0.5) * CONFIG.CAVE_SIZE * 0.7
    };
  }

  update(deltaTime, players) {
    // Find closest audible player
    let closestAudible = null;
    let closestDistance = Infinity;

    for (const [playerId, player] of Object.entries(players)) {
      if (!player.connected) continue;
      
      const distance = this.getDistance(player.position);
      const soundRadius = player.isCrouching ? 
        CONFIG.SOUND_RADIUS_CROUCHING : 
        CONFIG.SOUND_RADIUS_STANDING;

      // Only detect if player is moving and within sound range
      if (player.isMoving && distance < soundRadius && distance < closestDistance) {
        closestAudible = player;
        closestDistance = distance;
      }
    }

    // Update state based on hearing
    if (closestAudible) {
      this.state = 'chasing';
      this.targetPlayer = closestAudible;
      this.lastSoundPosition = { ...closestAudible.position };
    } else if (this.state === 'chasing' && this.lastSoundPosition) {
      // Continue to last known sound position
      const distToLastSound = this.getDistance(this.lastSoundPosition);
      if (distToLastSound < 2) {
        this.state = 'roaming';
        this.targetPlayer = null;
        this.wanderTarget = this.getRandomWanderTarget();
      }
    }

    // Move monster
    let targetPos;
    if (this.state === 'chasing' && this.targetPlayer) {
      targetPos = this.targetPlayer.position;
    } else {
      targetPos = this.wanderTarget;
      if (this.getDistance(this.wanderTarget) < 2) {
        this.wanderTarget = this.getRandomWanderTarget();
      }
    }

    const dx = targetPos.x - this.position.x;
    const dz = targetPos.z - this.position.z;
    const dist = Math.sqrt(dx * dx + dz * dz);

    if (dist > 0.1) {
      const speed = this.state === 'chasing' ? CONFIG.MONSTER_SPEED * 1.5 : CONFIG.MONSTER_SPEED;
      this.position.x += (dx / dist) * speed * deltaTime;
      this.position.z += (dz / dist) * speed * deltaTime;
    }

    // Check for attack
    if (this.state === 'chasing' && this.targetPlayer) {
      const attackDist = this.getDistance(this.targetPlayer.position);
      if (attackDist < CONFIG.MONSTER_ATTACK_RANGE) {
        return { attack: true, playerId: this.targetPlayer.id };
      }
    }

    return { attack: false };
  }

  getDistance(pos) {
    const dx = pos.x - this.position.x;
    const dz = pos.z - this.position.z;
    return Math.sqrt(dx * dx + dz * dz);
  }
}

// ============================================
// GAME STATE
// ============================================
const gameState = {
  players: {},
  cave: null,
  monsters: [],
  shop: {
    gold: 0,
    oxygenRefills: 10
  }
};

const caveGenerator = new CaveGenerator();

// ============================================
// PLAYER MANAGEMENT
// ============================================
function createPlayer(id) {
  return {
    id,
    position: { x: 0, y: 0, z: 0 },
    rotation: 0,
    health: CONFIG.MAX_HEALTH,
    oxygen: CONFIG.MAX_OXYGEN,
    isCrouching: false,
    isMoving: false,
    isMining: false,
    connected: true,
    backpack: [],
    money: 0,
    isDead: false
  };
}

// ============================================
// INVENTORY SYSTEM
// ============================================
function pickupItem(player, item) {
  if (player.backpack.length >= CONFIG.BACKPACK_SIZE) {
    return { success: false, message: 'Backpack full!' };
  }
  
  player.backpack.push({ ...item });
  return { success: true, message: `Picked up ${ItemDefinitions[item.type].name}` };
}

function dropItem(player, slotIndex) {
  if (slotIndex < 0 || slotIndex >= player.backpack.length) {
    return { success: false, message: 'Invalid slot' };
  }
  
  const item = player.backpack.splice(slotIndex, 1)[0];
  return { success: true, item, message: `Dropped ${ItemDefinitions[item.type].name}` };
}

function useItem(player, slotIndex) {
  if (slotIndex < 0 || slotIndex >= player.backpack.length) {
    return { success: false, message: 'Invalid slot' };
  }

  const item = player.backpack[slotIndex];
  if (item.type === ItemTypes.OXYGEN_REFILL) {
    player.oxygen = Math.min(CONFIG.MAX_OXYGEN, player.oxygen + ItemDefinitions[item.type].useValue);
    player.backpack.splice(slotIndex, 1);
    return { success: true, message: 'Oxygen refilled!' };
  }

  return { success: false, message: 'Cannot use this item' };
}

// ============================================
// SHOP SYSTEM
// ============================================
function sellOre(player, slotIndex) {
  if (slotIndex < 0 || slotIndex >= player.backpack.length) {
    return { success: false, message: 'Invalid slot' };
  }

  const item = player.backpack[slotIndex];
  if (item.type !== ItemTypes.GOLD_ORE) {
    return { success: false, message: 'Can only sell gold ore' };
  }

  const value = ItemDefinitions[item.type].sellValue;
  player.money += value;
  player.backpack.splice(slotIndex, 1);
  gameState.shop.gold += value;

  return { success: true, message: `Sold for $${value}`, money: player.money };
}

function buyOxygenRefill(player) {
  const cost = CONFIG.OXYGEN_REFILL_COST;
  
  if (player.money < cost) {
    return { success: false, message: 'Not enough money!' };
  }

  if (player.backpack.length >= CONFIG.BACKPACK_SIZE) {
    return { success: false, message: 'Backpack full!' };
  }

  if (gameState.shop.oxygenRefills <= 0) {
    return { success: false, message: 'Shop out of stock!' };
  }

  player.money -= cost;
  player.backpack.push({
    type: ItemTypes.OXYGEN_REFILL,
    id: `oxygen_${Date.now()}`
  });
  gameState.shop.oxygenRefills--;

  return { success: true, message: 'Purchased Oxygen Refill!', money: player.money };
}

// ============================================
// COLLISION DETECTION
// ============================================
function checkWallCollision(position) {
  for (const wall of gameState.cave.walls) {
    const halfW = wall.width / 2;
    const halfD = wall.depth / 2;
    
    if (position.x > wall.x - halfW && position.x < wall.x + halfW &&
        position.z > wall.z - halfD && position.z < wall.z + halfD) {
      return true;
    }
  }
  
  // Boundary check
  const bound = CONFIG.CAVE_SIZE / 2 - 2;
  if (Math.abs(position.x) > bound || Math.abs(position.z) > bound) {
    return true;
  }
  
  return false;
}

// ============================================
// SOCKET.IO HANDLERS
// ============================================
io.on('connection', (socket) => {
  console.log(`Player connected: ${socket.id}`);

  // Create new player
  const player = createPlayer(socket.id);
  gameState.players[socket.id] = player;

  // Send initial game state
  socket.emit('init', {
    playerId: socket.id,
    cave: gameState.cave,
    config: CONFIG,
    player: player,
    shop: gameState.shop
  });

  // Handle player input
  socket.on('input', (data) => {
    const player = gameState.players[socket.id];
    if (!player || player.isDead) return;

    const { forward, backward, left, right, crouch, mine } = data;
    player.isMoving = forward || backward || left || right;
    player.isCrouching = crouch;
    player.isMining = mine;

    // Calculate movement
    const speed = crouch ? CONFIG.CROUCH_SPEED : CONFIG.PLAYER_SPEED;
    let dx = 0, dz = 0;

    if (forward) dz -= speed * 0.1;
    if (backward) dz += speed * 0.1;
    if (left) dx -= speed * 0.1;
    if (right) dx += speed * 0.1;

    // Apply movement with collision
    const newPos = { ...player.position };
    newPos.x += dx;
    newPos.z += dz;

    if (!checkWallCollision(newPos)) {
      player.position = newPos;
    }

    // Update rotation
    if (data.rotation !== undefined) {
      player.rotation = data.rotation;
    }
  });

  // Handle mining
  socket.on('mine', () => {
    const player = gameState.players[socket.id];
    if (!player || player.isDead) return;

    // Check for nearby ore
    for (const ore of gameState.cave.ores) {
      if (ore.mined) continue;
      
      const dist = Math.sqrt(
        Math.pow(ore.position.x - player.position.x, 2) +
        Math.pow(ore.position.z - player.position.z, 2)
      );

      if (dist < 3) {
        ore.mined = true;
        const result = pickupItem(player, ore);
        io.to(socket.id).emit('message', result.message);
        io.emit('oreMined', { oreId: ore.id, playerId: socket.id });
        break;
      }
    }
  });

  // Handle item pickup from ground
  socket.on('pickup', () => {
    const player = gameState.players[socket.id];
    if (!player || player.isDead) return;

    // Check for dropped items nearby (would be implemented with dropped items array)
    io.to(socket.id).emit('message', 'No items nearby to pick up');
  });

  // Handle inventory actions
  socket.on('dropItem', (slotIndex) => {
    const player = gameState.players[socket.id];
    if (!player || player.isDead) return;

    const result = dropItem(player, slotIndex);
    io.to(socket.id).emit('message', result.message);
  });

  socket.on('useItem', (slotIndex) => {
    const player = gameState.players[socket.id];
    if (!player || player.isDead) return;

    const result = useItem(player, slotIndex);
    io.to(socket.id).emit('message', result.message);
  });

  // Shop actions
  socket.on('sellOre', (slotIndex) => {
    const player = gameState.players[socket.id];
    if (!player || player.isDead) return;

    const result = sellOre(player, slotIndex);
    io.to(socket.id).emit('message', result.message);
    if (result.success) {
      io.to(socket.id).emit('moneyUpdate', { money: result.money });
    }
  });

  socket.on('buyOxygenRefill', () => {
    const player = gameState.players[socket.id];
    if (!player || player.isDead) return;

    const result = buyOxygenRefill(player);
    io.to(socket.id).emit('message', result.message);
    if (result.success) {
      io.to(socket.id).emit('moneyUpdate', { money: result.money });
      io.emit('shopUpdate', { oxygenRefills: gameState.shop.oxygenRefills });
    }
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log(`Player disconnected: ${socket.id}`);
    if (gameState.players[socket.id]) {
      gameState.players[socket.id].connected = false;
    }
  });
});

// ============================================
// GAME LOOP
// ============================================
let lastTime = Date.now();

function gameLoop() {
  const now = Date.now();
  const deltaTime = (now - lastTime) / 1000;
  lastTime = now;

  // Update all players
  for (const [playerId, player] of Object.entries(gameState.players)) {
    if (!player.connected || player.isDead) continue;

    // Deplete oxygen
    player.oxygen -= CONFIG.OXYGEN_DEPLETION_RATE * deltaTime;
    
    if (player.oxygen <= 0) {
      player.oxygen = 0;
      player.health -= 20 * deltaTime;
      
      if (player.health <= 0) {
        player.health = 0;
        player.isDead = true;
        io.to(playerId).emit('death', { message: 'You ran out of oxygen!' });
      }
    }
  }

  // Update monsters
  for (const monster of gameState.monsters) {
    const result = monster.update(deltaTime, gameState.players);
    
    if (result.attack) {
      const player = gameState.players[result.playerId];
      if (player && !player.isDead) {
        player.health -= 50 * deltaTime;
        
        if (player.health <= 0) {
          player.health = 0;
          player.isDead = true;
          io.to(result.playerId).emit('death', { message: 'You were caught by a cave monster!' });
        }
      }
    }
  }

  // Broadcast game state
  io.emit('gameState', {
    players: Object.fromEntries(
      Object.entries(gameState.players).map(([id, p]) => [
        id,
        {
          id: p.id,
          position: p.position,
          rotation: p.rotation,
          health: p.health,
          oxygen: p.oxygen,
          isCrouching: p.isCrouching,
          isMoving: p.isMoving,
          isDead: p.isDead,
          money: p.money
        }
      ])
    ),
    monsters: gameState.monsters.map(m => ({
      id: m.id,
      position: m.position,
      state: m.state
    })),
    shop: gameState.shop
  });
}

// Initialize cave
gameState.cave = caveGenerator.generate();

// Spawn monsters
for (let i = 0; i < CONFIG.MONSTER_COUNT; i++) {
  gameState.monsters.push(new Monster(`monster_${i}`));
}

// Start game loop
setInterval(gameLoop, 1000 / CONFIG.TICK_RATE);

// Start server
const PORT = process.env.PORT || 3001;
httpServer.listen(PORT, () => {
  console.log(`Cave Diver server running on port ${PORT}`);
});
