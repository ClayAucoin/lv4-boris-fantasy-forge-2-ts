// src/games/game-1.js

import { Adventurer } from "../models/Adventurer.ts";
import { Monster } from "../models/Monster.ts";

// const hero1 = new Adventurer("Robin", 80, 25, 100)
// const hero2 = new Adventurer("Ariel", 90, 25, 100)

// console.log("--- First Adventurer Created ---")
// hero1.scout()
// hero2.scout()

// console.log("\n--- Individual Actions ---")
// hero1.receiveDamage(10)
// hero1.heal(5)
// hero2.receiveDamage(20)
// hero2.heal(15)

// console.log("\n--- Final Health ---")
// hero1.scout()
// hero2.scout()

const braveHero: Adventurer = new Adventurer("Arthur", 100, 25, 100);
const sneakyGoblin: Monster = new Monster("Snarl", 75, 10);

console.log(`${braveHero.name} (Health: ${braveHero.health}, Attack: ${braveHero.attackPower})`);
console.log(`${sneakyGoblin.name} (Health: ${sneakyGoblin.health})`);

console.log("\n--- Combat Log ---");
braveHero.attack(sneakyGoblin, "swings at");
braveHero.attack(sneakyGoblin, "slashes at");
braveHero.attack(sneakyGoblin, "slashes at"); // This attack should reduce health to 0

console.log("\n--- Final States ---");
console.log(`${braveHero.name} (Health: ${braveHero.health})`);
console.log(`${sneakyGoblin.name} (Health: ${sneakyGoblin.health})`);