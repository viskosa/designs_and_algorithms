// The Weapon class is an abstract implementation of Item and describes items that can deal damage and break from use. The implementation of this class is provided for you. All instances of Weapon have a base damage value baseDamage and a modifier to that value damageModifier. The sum of these two values determines the effective damage that this Weapon can do on a single use. In addition, Weapons have a base durability value baseDurability, and a modifier to that value durabilityModifier. The sum of these two values determines the effective durability of the Weapon. When this sum reaches zero or less, the effective durability is zero and the Weapon is considered to be broken and cannot be used.

// We provide several implemented methods that include:

// ●	Weapon.getDamage(): Returns the effective damage of the Weapon. 

// ●	Weapon.getDurability(): Returns the effective durability of the Weapon. 

// ●	Weapon.toString(): for a Weapon with the name of “hammer”, a value of 300, a weight of 2.032, a baseDamage value of 30.4219, a damageModifier of 0.05, a baseDurability of 0.7893, and a durabilityModifier of 0.05, the method returns a String in the following format:

// ”hammer − Value: 300, Weight : 2.03 , Damage : 30.47 , Durability : 83.93%”

// ●	Weapon.use(): This method returns a String describing what happens when a Weapon is used. For a Weapon with the name of “hammer”, and an effective damage of 30.4725, the method should return the following:

// ”You use the hammer , dealing 30.47 points of damage.”

// ●	“Using” a Weapon lowers (subtracts) its effective durability by Weapon.MODIFIER CHANGE RATE. If the effective durability of the Weapon hits or drops below 0, the Weapon will ”break”. If the Weapon ”breaks”, the method should output the previous String, but additionally with a newline character and the additional text “The hammer breaks.”:

// ”You use the hammer , dealing 34.05 points of damage . The hammer breaks.”

// ●	For a Weapon with the name of “hammer”, if it is “broken” (The effective durability is 0 or less), calling its use() method returns the following:

// ”You can't use the hammer , it is broken.”

// In this case, there is no change to durabilityModifier.

// don’t forget to use super in constructor (note that parent classes can require extra fileds, such as ‘name’)
import { Item } from "./Item";

export abstract class Weapon extends Item {
  protected MODIFIER_CHANGE_RATE: number = 0.05;

  private baseDamage: number;
  private damageModifier: number;
  private effectiveDamage: number;

  private baseDurability: number;
  private durabilityModifier: number;
  private effectiveDurability: number;

  protected constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
      super(name, value, weight);

      this.baseDamage = baseDamage;
      this.baseDurability = baseDurability;
      this.damageModifier = this.MODIFIER_CHANGE_RATE;
      this.durabilityModifier = this.MODIFIER_CHANGE_RATE;

      this.effectiveDamage = this.baseDamage + this.damageModifier;
      this.effectiveDurability = this.baseDurability + this.durabilityModifier;
  }

  // getters
  public getDamage(): number {
    return this.effectiveDamage
  }

  public getBaseDamage(): number {
    return this.baseDamage
  }

  public getDamageModifier(): number {
    return this.damageModifier
  }

  public getDurability(): number {
    return this.effectiveDurability
  }

  // public getModifier(): number {
  //   return this.effectiveDurability
  // }
  public getBaseDurability(): number {
    return this.baseDurability
  }

  public getDurabilityModifier(): number {
    return this.durabilityModifier
  }

  // setters
  public setDamageModifier(damage: number): void {
    this.damageModifier = damage
  }

  public setDurabilityModifier(durability: number): void {
    this.durabilityModifier = durability
  }

  public toString(): string {
    return `${this.getName()} − Value: ${this.getValue()}, Weight: ${this.getWeight().toFixed(2)}, 
      Damage: ${this.effectiveDamage.toFixed(2)}, Durability: ${(this.effectiveDurability * 100).toFixed(2)}%`
  }

  public use(): string {
    let message = `You use the ${this.getName()}, dealing ${this.effectiveDamage.toFixed(2)} points of damage.`
    
    if (this.effectiveDurability <= 0) {
      message = `You can't use the ${this.getName()}, it is broken.`;
    } else {
      this.effectiveDurability = this.effectiveDurability - this.durabilityModifier;
      message = this.effectiveDurability > 0 ? message : `${message} \nThe ${this.getName()} breaks`;
    }

    return message;
  }

  public abstract polish(): void;
}