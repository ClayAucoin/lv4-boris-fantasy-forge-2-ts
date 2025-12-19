// src/models/HealPotion.js

import { Adventurer } from "./Adventurer.ts"
import { Monster } from "./Monster.ts"

class HealPotion {
  name: string
  healAmount: number
  charges: number
  flavor: string

  constructor(name: string, healAmount: number, charges: number, flavor: string) {
    this.name = name
    this.healAmount = healAmount
    this.charges = charges
    this.flavor = flavor
  }

  healPotionInfo() {
    console.log("name:", this.name)
    console.log("healAmount:", this.healAmount)
    console.log("charges:", this.charges)
    console.log("flavor:", this.flavor)
  }

  use(target: Adventurer | Monster): void {
    if (this.charges > 0) {

      this.charges--
      target.heal(this.healAmount)
      console.log("h-1", `${this.name} has healed ${target.name} to ${target.health}. (${this.charges} charges left)`)
    } else {
      console.log("h-2", `${this.name} has no charges left.`)
    }

    if (this.flavor) {
      console.log("h-3", `${this.name} tastes like ${this.flavor}`)
    }
  }

  recharge(amount: number) {
    this.charges += amount
    console.log("h-4", `${this.name} recharged to ${this.charges}`)
  }
}

export { HealPotion }