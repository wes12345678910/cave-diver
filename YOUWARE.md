# Cave Diver - Multiplayer 3D Game

A server-authoritative multiplayer first-person cave-diving game with procedural cave generation, mining, inventory management, and stealth monster gameplay.

## Project Status

- **Project Type**: Multiplayer 3D Web Game
- **Entry Point**: `src/main.tsx` → `src/App.tsx` → `src/game/Game.tsx`
- **Server Entry**: `server/index.js`
- **Build System**: Vite 7.0.0
- **Styling System**: Tailwind CSS 3.4.17

## Game Features

### Core Gameplay
- **Procedural Cave Generation**: Rocky cave environment with randomly placed ore nodes
- **Player Controller**: WASD movement with first-person camera
- **Oxygen System**: Oxygen depletes over time; must mine ore and buy refills
- **Crouch Mechanic**: Hold C to crouch and reduce movement noise

### Mining & Inventory
- **Ore Nodes**: Gold ore scattered throughout the cave
- **Mining**: Press O near ore to mine it
- **10-Slot Backpack**: Limited inventory space
- **Pickup/Drop**: Pick up items and drop them from inventory

### Item System
- **Gold Ore**: Sellable to shop for money ($50 each)
- **Oxygen Refill**: Consumable that restores oxygen (+40)

### Shop System
- **Sell Ore**: Convert gold ore to money
- **Buy Supplies**: Purchase oxygen refills ($30 each)

### Stealth Monsters
- **Sound Detection**: Monsters only detect players by sound
- **Roaming Behavior**: Monsters wander the cave
- **Chase Mode**: When they hear you, they chase
- **Attack**: If caught, you take damage and may die

## Running Locally

### Development Mode (Both Server & Client)
```bash
pnpm run dev:all
```
This starts both the game server (port 3001) and Vite dev server.

### Separate Commands
```bash
# Start game server only
pnpm run server

# Start client only
pnpm run dev

# Build for production
pnpm run build
```

## Deploying to Render.com

### Option 1: Automatic Deploy (Recommended)
1. Push your code to GitHub
2. Go to [Render.com](https://render.com) and sign up
3. Click "New" → "Blueprint"
4. Select your GitHub repo
5. Render will read `render.yaml` and create both services

### Option 2: Manual Deploy
1. Create a new **Web Service** for the server:
   - Name: `cave-diver-server`
   - Environment: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `node --import tsx server/index.js`
   - Port: `10000`

2. Create a new **Static Site** for the client:
   - Name: `cave-diver-client`
   - Environment: `Static`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
   - Add env var: `VITE_SERVER_URL` = your server URL (from step 1)

3. After server deploys, copy its URL (e.g., `https://cave-diver-server-abc.onrender.com`)
4. Update client env var `VITE_SERVER_URL` with that URL
5. Rebuild client

## Controls

| Key | Action |
|-----|--------|
| W/A/S/D | Move forward/left/back/right |
| C | Crouch (reduces noise) |
| O | Mine ore (when near) |
| B | Toggle backpack |
| K | Toggle shop |
| Mouse | Look around |
| Click | Lock cursor |

## Architecture

### Server (`server/index.js`)
- Socket.io server for multiplayer
- Server-authoritative game state
- Procedural cave generation
- Monster AI with sound-based detection
- Inventory management
- Shop system

### Client (`src/game/Game.tsx`)
- Three.js for 3D rendering
- First-person camera
- Real-time player/monster rendering
- HUD with health/oxygen/money
- Backpack UI (10 slots)
- Shop UI (buy/sell)

## Tech Stack

- **Frontend**: React 18, TypeScript, Three.js
- **Backend**: Node.js, Express, Socket.io
- **Styling**: Tailwind CSS
- **Build**: Vite
- **Hosting**: Render.com

## File Structure

```
├── server/
│   └── index.js          # Game server
├── src/
│   ├── App.tsx           # Main app entry
│   ├── game/
│   │   └── Game.tsx       # Game component
│   └── ...
├── render.yaml           # Render.com deployment config
├── package.json
└── vite.config.ts
```
