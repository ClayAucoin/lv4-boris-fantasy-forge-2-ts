# Learn TypeScript with Fantasy Forge 2

A hands-on learning project focused on **TypeScript classes**, **type unions**, and **object interactions** using a small fantasy-themed combat and item system. The code demonstrates how typed models interact through multiple self-contained game scenarios.

---

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [How the Code Works](#how-the-code-works)
  - [Games](#games)
  - [Models](#models)
- [Setup and Run](#setup-and-run)
- [Configuration](#configuration)
- [Notes and Limitations](#notes-and-limitations)

---

## Overview

This project is organized around two main concepts:

1. **Models** (`src/models/`)  
   Reusable TypeScript classes such as `Adventurer`, `Monster`, `HealPotion`, `Shield`, and `Blacksmith`.  
   These define typed properties, constructors, and methods that control combat, healing, durability, and repairs.

2. **Games** (`src/games/`)  
   Small scripts that import models and exercise their behavior. Each game demonstrates different interactions, such as combat loops, potion usage, and equipment repair.

The entry point (`src/main-game.ts`) controls which game scenario runs.

All output is printed to the console, making this a safe, focused environment for learning TypeScript without any UI or framework complexity.

fileciteturn1file0

---

## Project Structure

```
src
├── main-game.ts
├── games
│   ├── game-1.ts
│   ├── game-2.ts
│   ├── game-3.ts
│   ├── game-4.ts
│   └── game-5.ts
└── models
    ├── Adventurer.ts
    ├── Blacksmith.ts
    ├── HealPotion.ts
    ├── Monster.ts
    └── Shield.ts
```

---

## How the Code Works

### Games

Each file in `src/games/` is a standalone scenario.

- **`game-1.ts`**  
  Demonstrates basic combat between an `Adventurer` and a `Monster`.  
  Shows typed attacks, health reduction, and defeat conditions.

- **`game-2.ts`**  
  Focuses on `HealPotion` behavior, including charges, healing, and recharging.

- **`game-3.ts`**  
  Simulates a short battle sequence with healing mid-combat.

- **`game-4.ts`**  
  Prints detailed info for each model and runs a mixed interaction scenario with attacks, potions, and monster behavior.

- **`game-5.ts`**  
  The most advanced example:
  - Uses typed instances for all models
  - Demonstrates shields absorbing damage
  - Introduces `Blacksmith` repairs that reduce an adventurer’s purse
  - Shows optional constructor parameters and stronger TypeScript guarantees

Only one game is executed at a time via `main-game.ts`.

---

### Models

#### `Adventurer`

- Typed properties: `name`, `health`, `attackPower`, `purse`
- Can:
  - Attack `Adventurer` or `Monster` targets
  - Heal and receive damage
  - Print status information
- Uses union types (`Adventurer | Monster`) to allow flexible combat targets.

#### `Monster`

- Has `health` and `damage`
- Can attack and be attacked
- Includes custom behaviors like `roar()`

#### `HealPotion`

- Tracks `healAmount`, `charges`, and `flavor`
- Can heal both adventurers and monsters
- Supports recharging and logs flavor text when used

#### `Shield`

- Tracks durability
- Reduces damage until durability runs out
- Can be repaired with different repair kits

#### `Blacksmith`

- Repairs shields for a cost
- Demonstrates optional constructor parameters
- Modifies both the hero (`purse`) and item (`durability`)

---

## Setup and Run

### Requirements

- Node.js
- TypeScript installed globally or locally

### Run a Game

1. Choose which game to run by editing `src/main-game.ts`:

```ts
import "./games/game-5.js"
```

2. Compile or run with a TypeScript-compatible setup, for example:

```bash
tsc
node dist/main-game.js
```

(Exact commands depend on how TypeScript is configured in your environment.)

---

## Configuration

No environment variables or external configuration files are used in this project.

---

## Notes and Limitations

- **Console-only output**: All feedback is logged via `console.log()`.
- **No strict interfaces**: Models rely on shared method names rather than formal interfaces.
- **Minimal error handling**: Health and durability checks are simple and intentionally readable.
- **Single active game**: Only one game file runs at a time via `main-game.ts`.

This project is intentionally small and explicit, making it well-suited for learning TypeScript fundamentals without abstraction overhead.
