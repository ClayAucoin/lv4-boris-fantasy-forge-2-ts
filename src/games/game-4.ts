// src/games/game-4.js

import { Adventurer } from "../models/Adventurer.ts"
import { HealPotion } from "../models/HealPotion.ts"
import { Monster } from "../models/Monster.ts"

const hero = new Adventurer("Sir Brave A Lot", 100, 15, 50)
const potion = new HealPotion("Flask of Red Goo", 20, 3, "frog teeth")
const monster = new Monster("Goblin", 30, 5)

console.log(`\n--- Adventurer Information ---`)
hero.adventurerInfo()
console.log(`\n--- HealPotion Information ---`)
potion.healPotionInfo()
console.log(`\n--- Monster Information ---`)
monster.monsterInfo()

console.log(`\n--- Game 4: Battle Start ---`)
console.log(`${hero.name} has a health of ${hero.health}.`)
console.log(`${potion.name} has ${potion.charges} charges left.`)
console.log(`${monster.name} has a health of ${monster.health}.`)

console.log(`\n--- A Monster Appears ---`)
monster.roar()

console.log("\n1")
monster.attack(hero, "stabs")

console.log("\n2")
potion.use(hero)

console.log("\n3")
hero.attack(monster, "shoots")

console.log("\n4")
hero.attack(monster, "barks at")

console.log("\n5")
hero.attack(monster, "yells at")

console.log("\n6")
monster.attack(hero, "tickles")

console.log("\n7")
potion.use(hero)


