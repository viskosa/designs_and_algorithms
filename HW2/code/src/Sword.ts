// The Sword class is a concrete implementation of Weapon that you must provide.

// ●	All instances of the Sword class have the name “sword”. 
// ●	Sword.polish(): This method increases the instance’s damageModifier by adding 
// Weapon.MODIFIER_CHANGE_RATE each time polish() is called, up to 25% of the baseDamage value. 
// If the base damage of a sword were to be 100, then the maximum that the effective damage 
// could be increased to would be 125.

import { Weapon } from "./Weapon";

export class Sword extends Weapon {
  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super("sword", baseDamage, baseDurability, value, weight);
  }

  public polish(): void {
    const baseDamage = this.getBaseDamage();
    const damageLimit = baseDamage * 0.25;
    const damageModifier = this.getDamageModifier();

if (damageModifier < damageLimit) {
  if ((damageModifier + this.getModifierRate()) > damageLimit) {
        this.setDamageModifier(damageLimit);
        console.log(`Your ${this.getName()} is polished to the max value now. Value of damageModifier is ${this.getDamageModifier().toFixed(2)}.`);
      } else {
        this.setDamageModifier(damageModifier + this.getModifierRate());
        console.log(`Your ${this.getName()} was polished. Value of damageModifier is ${this.getDamageModifier().toFixed(2)}.`);
      }
    } else {
      console.log(`Your ${this.getName()} is polished enough. Value of damageModifier is ${this.getDamageModifier().toFixed(2)}.`);
    }
  }
}
