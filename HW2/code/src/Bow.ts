// The Bow class is a concrete implementation of Weapon that you must provide.

// ●	All instances of the Bow class have the name “bow”.
// ●	Bow.polish(): This method increases the instance’s durabilityModifier by adding Weapon.MODIFIER_CHANGE_RATE. 
// Any changes are capped such that effective durability is no larger than one (1).

import { Weapon } from "./abstracts/Weapon";

export class Bow extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super("bow", baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    const baseDurability = this.getBaseDurability();
    const durabilityModifier = this.getDurabilityModifier();
    const durabilityLimit = 1;
    const effectiveDurability = this.getDurability(); // should be not more than 1

    if (effectiveDurability < 1) {
      if (baseDurability + durabilityModifier + this.getModifierRate() > durabilityLimit) {
        this.setDurabilityModifier(durabilityLimit);
        console.log(`Your ${this.getName()} is polished to the max value now. Value of durabilityModifier is ${this.getDurabilityModifier().toFixed(2)}.`);
      } else {
        this.setDurabilityModifier(durabilityModifier + this.getModifierRate());
        console.log(`Your ${this.getName()} was polished. Value of durabilityModifier is ${this.getDurabilityModifier().toFixed(2)}.`);
      }
    } else {
      console.log(`Your ${this.getName()} is polished enough. Value of durabilityModifier is ${this.getDurabilityModifier().toFixed(2)}.`);
    }
  }
}
