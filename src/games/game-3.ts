// src/games/game-3.js

import { Adventurer } from "../models/Adventurer.ts"
import { HealPotion } from "../models/HealPotion.ts"

const knight: Adventurer = new Adventurer("Sir Brave A Lot", 100, 20, 100)
const orc: Adventurer = new Adventurer("Orc Warrior", 80, 15, 50)
const potion: HealPotion = new HealPotion("Flask of Red Goo", 20, 3, "frog teeth")

console.log(`--- Game 3: Battle Start ---`)
console.log(`${knight.name} has a health of ${knight.health}.`)
console.log(`${orc.name} has a health of ${orc.health}.`)
console.log(`${potion.name} has ${potion.charges} charges left.`)

console.log(`\n--- Round 1 ---`)
orc.attack(knight, "swings his axe at")

console.log(`\n--- ${knight.name} is hurt. He drinks a potion (${potion.name}) ---`)
potion.use(knight)

console.log(`\n--- Round 2 ---`)
knight.attack(orc, "slashes his sword at")

console.log(`\n--- ${orc.name} is hurt. He drinks a potion (${potion.name}) ---`)
potion.use(orc)

