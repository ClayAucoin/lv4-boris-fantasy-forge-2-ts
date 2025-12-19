// src/models/Blacksmith.ts

import { Adventurer } from './Adventurer';
import { Shield } from './Shield';

class Blacksmith {
    name: string;
    repairCost: number;
    repairKit: string

    constructor(name: string, repairCost: number, repairKit?: string  ) {
        this.name = name;
        this.repairCost = repairCost;
        this.repairKit = repairKit || "Standard Repair Kit";
    }

    repair(hero: Adventurer, item: Shield) {
        console.log(`${this.name} takes the ${item.name} from ${hero.name}...`);

        // Call item.repair("Masterwork Hammer", 10)
        hero.purse -= this.repairCost;
        item.beRepaired(this.repairKit, 10);

        console.log("CLANG! CLANG! The item is restored.");
    }
}

export { Blacksmith };

