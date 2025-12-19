// src/models/Shield.ts

class Shield {
    name: string;
    defenseValue: number;
    durability: number;

    constructor(name: string, defenseValue: number, durability: number) {
        this.name = name;
        this.defenseValue = defenseValue;
        this.durability = durability;
    }

    protect(damage: number) {
        if (this.durability > 0) {
            this.durability -= 1;
            console.log(this.name + " soaked up some of the " + damage + " damage.");
        } else {
            console.log("The " + this.name + " is shattered!");
        }
    }

    beRepaired(kitName: string, amount: number) {
        this.durability += amount;
        console.log(kitName + " used to fix " + this.name + ".");
    }
}

export { Shield };