// src/games/game-5.ts

import { Adventurer } from '../models/Adventurer';
import { Monster } from '../models/Monster';
import { HealPotion } from '../models/HealPotion';
import { Shield } from '../models/Shield';
import { Blacksmith } from '../models/Blacksmith';

// 1. Create typed instances
const hero: Adventurer = new Adventurer("TypeScript Warrior", 100, 20, 100);
const enemy: Monster = new Monster("Bugbear", 80, 15);
const potion: HealPotion = new HealPotion("Syntax Elixir", 20, 2, "vanilla");
const ironShield = new Shield("Iron Greatshield", 20, 5);
const hammerAndAnvil: Blacksmith = new Blacksmith("Hammer & Anvil", 30);
const standardKit: Blacksmith = new Blacksmith("Standard Smith", 15, "Standard Repair Kit");
const deluxeKit: Blacksmith = new Blacksmith("Deluxe Smith", 50, "Rose Gold Repair Kit");

// 2. The Battle Loop
console.log("--- BATTLE START ---");

// TypeScript ensures 'enemy' is a valid target for 'attack' if you implemented it on Adventurer!
enemy.attack(hero, "swings at"); 

// TypeScript ensures 'hero' is a valid target for the potion
potion.use(hero); 

console.log(`Hero Health: ${hero.health}, purse: ${hero.purse}`);

// 3. Shield Usage
ironShield.protect(10); 

ironShield.beRepaired("Magic Welder", 5);

ironShield.beRepaired("Whetstone", 5);

hammerAndAnvil.repair(hero, ironShield);
standardKit.repair(hero, ironShield);
deluxeKit.repair(hero, ironShield);

console.log(`Hero Health: ${hero.health}, purse: ${hero.purse}`);
