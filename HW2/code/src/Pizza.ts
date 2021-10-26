import { Consumable } from "./abstracts/Consumable";

export class Pizza extends Consumable {
  numberOfSlices: number;
  slicesEaten: number = 0;

  constructor(numberOfSlices: number, spoiled: boolean) {
    super("pizza", 0, 0, spoiled);
    this.numberOfSlices = numberOfSlices;
  }

  public eat(): string {
    if (this.slicesEaten < this.numberOfSlices) {
      this.slicesEaten++;

      if (this.slicesEaten >= this.numberOfSlices) {
        this.setConsumed(true);
      }

      return super.eat(); // is this right decision to call super's eat method?
    } else {
      return this.use();
    }
  }
}
