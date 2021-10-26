// The Consumable class describes those items that can be eaten by the player. Consumables can be marked as consumed, and can be spoiled. These properties are stored in the instance variables consumed and spoiled, respectively. A newly-created Consumable object should have its consumed field set to false.

// ●	Consumable.use(): If a Consumable is not spoiled and is not consumed, calling this simply returns the value from a call to Consumable.eat(). For a Consumable with the name of “bread” that has already been consumed, this method returns the following:

// ”There is nothing left of the bread to consume.”

// Assuming for this Consumable named “bread” that the value returned by a call to its eat() method is the following:

// ”You eat the bread.”

// If this “bread” were to be spoiled, the method returns this String, appended with a newline and the text “You feel sick.”:

// ”You eat the bread. 
// You feel sick.”

import { Item } from "./Item";

export abstract class Consumable extends Item {
  private consumed: boolean;
  private spoiled: boolean;

  protected constructor(name: string, value: number, weight: number, spoiled: boolean) {
    super(name, value, weight);

    this.spoiled = spoiled || false;
    this.consumed = false;
  }
  public eat(): string {
    const defaultMessage = `You eat the ${this.getName()}.`;

    if (this.spoiled) {
      return `${defaultMessage} \nYou feel sick.`
    }

    return defaultMessage;
  }

  public use(): string {
    if (this.consumed) {
      return `There is nothing left of the ${this.getName()} to consume.`
    }

    return this.eat();
  }

  public setConsumed(consumed: boolean): void {
    this.consumed = consumed
  }

  public isConsumed(): boolean {
    return this.consumed
  }

  public isSpoiled(): boolean {
    return this.spoiled
  }
}