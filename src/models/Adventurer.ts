// src/models/Adventurer.js

import { HealPotion } from "./HealPotion.ts"
import { Monster } from "./Monster.ts"

class Adventurer {
  name: string
  health: number
  attackPower: number
  purse: number

  constructor(name: string, health: number, attackPower: number, purse: number) {
    this.name = name
    this.health = health
    this.attackPower = attackPower
    this.purse = purse
  }

  adventurerInfo() {
    console.log("name:", this.name)
    console.log("health:", this.health)
    console.log("attackPower:", this.attackPower)
  }

  scout() {
    console.log("a-1", `${this.name} is scouting...${this.health}`)
  }

  receiveDamage(amount: number): void {
    this.health -= amount

    if (this.health < 0) {
      this.health = 0
      console.log("a-2", `${this.name} has collapsed!`)
    } else {
      console.log("a-3", `${this.name} takes ${amount} damage. (health: ${this.health})`)
    }
  }

  heal(amount: number): void {
    this.health += amount
    console.log("a-4", `${this.name} heals for ${amount}. (health: ${this.health})`)
  }

  attack(target: Adventurer | Monster, action: string): void {
    console.log("a-5", `${this.name} ${action} attacks ${target.name}!`)

    if (target.health >= 0) {
      const resultHealth = target.health - this.attackPower
      target.receiveDamage(this.attackPower)

      if (resultHealth <= 0) {
        console.log("a-6", `${this.name} has slain ${target.name}!`)
      }
    } else {
      console.log("a-7", `${target.name} has already been defeated`)
    }
  }
}

export { Adventurer }