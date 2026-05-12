/**
 * Cave Diver - Client Game
 * 3D first-person cave diving game with Socket.io
 */

import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { io, Socket } from 'socket.io-client';

// ============================================
// TYPES
// ============================================
interface Player {
  id: string;
  position: { x: number; y: number; z: number };
  rotation: number;
  health: number;
  oxygen: number;
  isCrouching: boolean;
  isMoving: boolean;
  isDead: boolean;
  money: number;
}

interface Ore {
  id: string;
  type: string;
  position: { x: number; y: number; z: number };
  mined: boolean;
}

interface Monster {
  id: string;
  position: { x: number; y: number; z: number };
  state: string;
}

interface Cave {
  ores: Ore[];
  walls: { x: number; z: number; width: number; depth: number }[];
}

interface GameConfig {
  TICK_RATE: number;
  PLAYER_SPEED: number;
  CROUCH_SPEED: number;
  MAX_OXYGEN: number;
  MAX_HEALTH: number;
  BACKPACK_SIZE: number;
}

interface Item {
  type: string;
  id: string;
}

const ITEM_NAMES: Record<string, string> = {
  gold_ore: 'Gold Ore',
  oxygen_refill: 'Oxygen Refill'
};

// ============================================
// MAIN GAME COMPONENT
// ============================================
export default function CaveDiverGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const socketRef = useRef<Socket | null>(null);
  
  const [connected, setConnected] = useState(false);
  const [playerId, setPlayerId] = useState<string>('');
  const [players, setPlayers] = useState<Record<string, Player>>({});
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [cave, setCave] = useState<Cave | null>(null);
  const [config, setConfig] = useState<GameConfig | null>(null);
  
  const [health, setHealth] = useState(100);
  const [oxygen, setOxygen] = useState(100);
  const [money, setMoney] = useState(0);
  const [backpack, setBackpack] = useState<Item[]>([]);
  const [shopOxygenRefills, setShopOxygenRefills] = useState(10);
  
  const [showShop, setShowShop] = useState(false);
  const [showBackpack, setShowBackpack] = useState(false);
  const [message, setMessage] = useState('');
  const [isDead, setIsDead] = useState(false);
  
  const keysRef = useRef({ forward: false, backward: false, left: false, right: false, crouch: false, mine: false });
  const rotationRef = useRef(0);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const playerMeshRef = useRef<THREE.Mesh | null>(null);
  const oreMeshesRef = useRef<Map<string, THREE.Mesh>>(new Map());
  const monsterMeshesRef = useRef<Map<string, THREE.Mesh>>(new Map());
  const wallMeshesRef = useRef<THREE.Mesh[]>([]);

  // ============================================
  // THREE.JS SETUP
  // ============================================
  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);
    scene.fog = new THREE.Fog(0x1a1a2e, 10, 80);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 2, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffaa00, 1, 50);
    pointLight.position.set(0, 10, 0);
    pointLight.castShadow = true;
    scene.add(pointLight);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(200, 200);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x2d2d2d,
      roughness: 0.9
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Animation loop
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      
      // Update camera position based on player
      const myPlayer = players[playerId];
      if (myPlayer && !myPlayer.isDead) {
        camera.position.x = myPlayer.position.x;
        camera.position.z = myPlayer.position.z;
        camera.position.y = myPlayer.isCrouching ? 1 : 1.8;
        camera.rotation.y = -myPlayer.rotation;
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [playerId, players]);

  // ============================================
  // SOCKET CONNECTION
  // ============================================
  useEffect(() => {
    // Use environment variable for server URL, fallback to localhost for development
// In production on Render, uses the same host but different port
const getServerUrl = () => {
  if (import.meta.env.VITE_SERVER_URL) {
    return import.meta.env.VITE_SERVER_URL;
  }
  // In production (same domain), connect to same host but server port
  if (window.location.hostname !== 'localhost') {
    return `https://${window.location.hostname}`;
  }
  return 'http://localhost:3001';
};
const socket = io(getServerUrl());
    socketRef.current = socket;

    socket.on('connect', () => {
      setConnected(true);
    });

    socket.on('init', (data) => {
      setPlayerId(data.playerId);
      setConfig(data.config);
      setCave(data.cave);
      setHealth(data.player.health);
      setOxygen(data.player.oxygen);
      setMoney(data.player.money);
      setBackpack(data.player.backpack || []);
      setShopOxygenRefills(data.shop.oxygenRefills);

      // Create cave environment
      if (sceneRef.current && data.cave) {
        createCaveEnvironment(data.cave);
      }
    });

    socket.on('gameState', (data) => {
      setPlayers(data.players);
      setMonsters(data.monsters);
      setShopOxygenRefills(data.shop.oxygenRefills);
      
      // Update my player state
      if (data.players[playerId]) {
        setHealth(data.players[playerId].health);
        setOxygen(data.players[playerId].oxygen);
        setMoney(data.players[playerId].money);
      }
    });

    socket.on('message', (data: string) => {
      setMessage(data);
      setTimeout(() => setMessage(''), 3000);
    });

    socket.on('moneyUpdate', (data) => {
      setMoney(data.money);
    });

    socket.on('shopUpdate', (data) => {
      setShopOxygenRefills(data.oxygenRefills);
    });

    socket.on('oreMined', (data) => {
      // Remove mined ore from scene
      const mesh = oreMeshesRef.current.get(data.oreId);
      if (mesh && sceneRef.current) {
        sceneRef.current.remove(mesh);
        oreMeshesRef.current.delete(data.oreId);
      }
    });

    socket.on('death', (data) => {
      setIsDead(true);
      setMessage(data.message);
    });

    return () => {
      socket.disconnect();
    };
  }, [playerId]);

  // ============================================
  // CAVE ENVIRONMENT CREATION
  // ============================================
  const createCaveEnvironment = (caveData: Cave) => {
    if (!sceneRef.current) return;

    // Create ore meshes
    const oreGeometry = new THREE.OctahedronGeometry(0.5);
    const oreMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffd700,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xffa500,
      emissiveIntensity: 0.3
    });

    caveData.ores.forEach((ore) => {
      if (ore.mined) return;
      
      const mesh = new THREE.Mesh(oreGeometry, oreMaterial);
      mesh.position.set(ore.position.x, 0.5, ore.position.z);
      mesh.castShadow = true;
      sceneRef.current!.add(mesh);
      oreMeshesRef.current.set(ore.id, mesh);
    });

    // Create wall meshes
    const wallMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x4a4a4a,
      roughness: 0.9
    });

    caveData.walls.forEach((wall) => {
      const geometry = new THREE.BoxGeometry(wall.width, 3, wall.depth);
      const mesh = new THREE.Mesh(geometry, wallMaterial);
      mesh.position.set(wall.x, 1.5, wall.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      sceneRef.current!.add(mesh);
      wallMeshesRef.current.push(mesh);
    });

    // Create monster meshes
    const monsterGeometry = new THREE.SphereGeometry(1, 16, 16);
    const monsterMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff0000,
      emissive: 0x440000,
      emissiveIntensity: 0.5
    });

    for (let i = 0; i < 5; i++) {
      const mesh = new THREE.Mesh(monsterGeometry, monsterMaterial);
      mesh.position.set(
        (Math.random() - 0.5) * 60,
        1,
        (Math.random() - 0.5) * 60
      );
      mesh.castShadow = true;
      sceneRef.current!.add(mesh);
      monsterMeshesRef.current.set(`monster_${i}`, mesh);
    }
  };

  // Update ore meshes visibility
  useEffect(() => {
    if (!cave) return;
    
    cave.ores.forEach((ore) => {
      const mesh = oreMeshesRef.current.get(ore.id);
      if (mesh) {
        mesh.visible = !ore.mined;
      }
    });
  }, [cave]);

  // Update monster positions
  useEffect(() => {
    monsters.forEach((monster) => {
      const mesh = monsterMeshesRef.current.get(monster.id);
      if (mesh) {
        mesh.position.set(monster.position.x, 1, monster.position.z);
        
        // Change color based on state
        const material = mesh.material as THREE.MeshStandardMaterial;
        if (monster.state === 'chasing') {
          material.color.setHex(0xff0000);
          material.emissiveIntensity = 0.8;
        } else {
          material.color.setHex(0x880000);
          material.emissiveIntensity = 0.3;
        }
      }
    });
  }, [monsters]);

  // ============================================
  // INPUT HANDLING
  // ============================================
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isDead) return;
      
      switch (e.key.toLowerCase()) {
        case 'w': keysRef.current.forward = true; break;
        case 's': keysRef.current.backward = true; break;
        case 'a': keysRef.current.left = true; break;
        case 'd': keysRef.current.right = true; break;
        case 'c': keysRef.current.crouch = true; break;
        case 'o': keysRef.current.mine = true; break;
        case 'b': setShowBackpack(prev => !prev); break;
        case 'k': setShowShop(prev => !prev); break;
      }
      
      sendInput();
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      switch (e.key.toLowerCase()) {
        case 'w': keysRef.current.forward = false; break;
        case 's': keysRef.current.backward = false; break;
        case 'a': keysRef.current.left = false; break;
        case 'd': keysRef.current.right = false; break;
        case 'c': keysRef.current.crouch = false; break;
        case 'o': keysRef.current.mine = false; break;
      }
      
      sendInput();
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (document.pointerLockElement) {
        rotationRef.current += e.movementX * 0.002;
        sendInput();
      }
    };

    const handleClick = () => {
      if (!isDead) {
        canvasRef.current?.requestPointerLock();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    window.addEventListener('mousemove', handleMouseMove);
    canvasRef.current?.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('mousemove', handleMouseMove);
      canvasRef.current?.removeEventListener('click', handleClick);
    };
  }, [isDead]);

  const sendInput = useCallback(() => {
    if (!socketRef.current || isDead) return;
    
    socketRef.current.emit('input', {
      ...keysRef.current,
      rotation: rotationRef.current
    });

    // Handle mining
    if (keysRef.current.mine) {
      socketRef.current.emit('mine');
    }
  }, [isDead]);

  // ============================================
  // INVENTORY ACTIONS
  // ============================================
  const handleDropItem = (slotIndex: number) => {
    socketRef.current?.emit('dropItem', slotIndex);
  };

  const handleUseItem = (slotIndex: number) => {
    socketRef.current?.emit('useItem', slotIndex);
  };

  const handleSellOre = (slotIndex: number) => {
    socketRef.current?.emit('sellOre', slotIndex);
  };

  const handleBuyOxygen = () => {
    socketRef.current?.emit('buyOxygenRefill');
  };

  // ============================================
  // RENDER
  // ============================================
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Game Canvas */}
      <canvas ref={canvasRef} className="block" />
      
      {/* Connection Status */}
      {!connected && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80">
          <div className="text-white text-2xl">Connecting to server...</div>
        </div>
      )}

      {/* Death Screen */}
      {isDead && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-900/90">
          <h1 className="text-5xl font-bold text-white mb-4">YOU DIED</h1>
          <p className="text-xl text-white/80">{message}</p>
          <p className="text-lg text-white/60 mt-4">Refresh to respawn</p>
        </div>
      )}

      {/* HUD */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start pointer-events-none">
        {/* Health & Oxygen */}
        <div className="flex flex-col gap-2">
          <div className="bg-black/60 rounded-lg p-3 min-w-[200px]">
            <div className="text-white text-sm mb-1">Health</div>
            <div className="h-4 bg-gray-700 rounded overflow-hidden">
              <div 
                className="h-full bg-red-500 transition-all duration-300"
                style={{ width: `${health}%` }}
              />
            </div>
          </div>
          <div className="bg-black/60 rounded-lg p-3 min-w-[200px]">
            <div className="text-white text-sm mb-1">Oxygen</div>
            <div className="h-4 bg-gray-700 rounded overflow-hidden">
              <div 
                className="h-full bg-blue-500 transition-all duration-300"
                style={{ width: `${oxygen}%` }}
              />
            </div>
          </div>
        </div>

        {/* Money */}
        <div className="bg-black/60 rounded-lg p-3">
          <div className="text-yellow-400 text-xl font-bold">${money}</div>
        </div>

        {/* Controls Help */}
        <div className="bg-black/60 rounded-lg p-3 text-white text-sm">
          <div className="font-bold mb-2">Controls</div>
          <div>WASD - Move</div>
          <div>C - Crouch (stealth)</div>
          <div>O - Mine ore</div>
          <div>B - Backpack</div>
          <div>K - Shop</div>
          <div>Click - Lock cursor</div>
        </div>
      </div>

      {/* Message Toast */}
      {message && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-black/80 text-white px-6 py-3 rounded-lg text-lg animate-pulse">
            {message}
          </div>
        </div>
      )}

      {/* Backpack Panel */}
      {showBackpack && (
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900/95 rounded-lg p-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white text-xl font-bold">Backpack</h3>
            <button 
              onClick={() => setShowBackpack(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className={`h-16 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-colors ${
                  backpack[i] 
                    ? 'bg-yellow-900/50 border-yellow-500 hover:bg-yellow-800/50' 
                    : 'bg-gray-800/50 border-gray-600'
                }`}
                onClick={() => backpack[i] && handleUseItem(i)}
                onContextMenu={(e) => {
                  e.preventDefault();
                  backpack[i] && handleDropItem(i);
                }}
              >
                {backpack[i] ? (
                  <div className="text-center">
                    <div className="text-yellow-400 text-xs">
                      {ITEM_NAMES[backpack[i].type] || backpack[i].type}
                    </div>
                    <div className="text-gray-400 text-[10px]">Click: Use | Right: Drop</div>
                  </div>
                ) : (
                  <span className="text-gray-500 text-xs">Empty</span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Shop Panel */}
      {showShop && (
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-900/95 rounded-lg p-6 w-96">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-white text-xl font-bold">Cave Shop</h3>
            <button 
              onClick={() => setShowShop(false)}
              className="text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          
          <div className="space-y-4">
            {/* Sell Gold Ore */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="text-yellow-400 font-bold mb-2">Sell Ore</h4>
              <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto">
                {backpack.filter(item => item.type === 'gold_ore').map((item, i) => (
                  <button
                    key={item.id}
                    onClick={() => handleSellOre(backpack.indexOf(item))}
                    className="bg-yellow-700 hover:bg-yellow-600 text-white py-2 px-3 rounded text-sm"
                  >
                    Sell Gold Ore ($50)
                  </button>
                ))}
                {backpack.filter(item => item.type === 'gold_ore').length === 0 && (
                  <p className="text-gray-500 text-sm col-span-2">No gold ore to sell</p>
                )}
              </div>
            </div>

            {/* Buy Oxygen Refill */}
            <div className="bg-gray-800/50 rounded-lg p-4">
              <h4 className="text-blue-400 font-bold mb-2">Buy Supplies</h4>
              <div className="flex justify-between items-center">
                <span className="text-white">Oxygen Refill</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">({shopOxygenRefills} in stock)</span>
                  <button
                    onClick={handleBuyOxygen}
                    disabled={money < 30 || shopOxygenRefills <= 0}
                    className={`py-2 px-4 rounded ${
                      money >= 30 && shopOxygenRefills > 0
                        ? 'bg-blue-600 hover:bg-blue-500 text-white'
                        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Buy ($30)
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-gray-700">
            <div className="text-yellow-400 text-lg font-bold">Your Money: ${money}</div>
          </div>
        </div>
      )}
    </div>
  );
}
