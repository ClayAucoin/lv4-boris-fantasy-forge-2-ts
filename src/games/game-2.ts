// src/games/game-2.js

import { Adventurer } from "../models/Adventurer.ts"
import { HealPotion } from "../models/HealPotion.ts"

const hero1: Adventurer = new Adventurer("Ariel", 60, 25, 100)
const magicMush: HealPotion = new HealPotion("Magic Mush", 30, 3, "earthy")
const smallPotion: HealPotion = new HealPotion("Small Potion", 10, 2, "berry")
const largePotion: HealPotion = new HealPotion("Large Potion", 50, 1, "honey")

console.log(`${hero1.name} (health: ${hero1.health}, attack power: ${hero1.attackPower})`);
console.log(`${smallPotion.name} (charges: ${smallPotion.charges})`);
console.log(`${largePotion.name} (charges: ${largePotion.charges})`);

console.log("\n--- Game 2: Potion Test ---");

smallPotion.use(hero1)
smallPotion.use(hero1)
smallPotion.use(hero1)

largePotion.use(hero1)


console.log("\n--- Recharge Test ---");
smallPotion.recharge(3)

// console.log(hero1)
// console.log(magicMush)

// hero1.receiveDamage(20);
// magicMush.use(hero1)
// hero1.receiveDamage(20);
// magicMush.use(hero1)
// hero1.receiveDamage(20);
// magicMush.use(hero1)

console.log("\n--- After Using Potion ---");
console.log(`${hero1.name} (health: ${hero1.health})`);
console.log(`${smallPotion.name} has ${smallPotion.charges} charges left.`);
console.log(`${largePotion.name} has ${largePotion.charges} charges left.`);