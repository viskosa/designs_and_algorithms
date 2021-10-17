import { Shipment } from './Shipment';
import { IShipment } from './types';

export class MarksDecorator implements IShipment {
  wrappee: Shipment;

  constructor(shipment: Shipment) {
    this.wrappee = shipment
  }

  getMarks(): string[] {
    return this.wrappee.getMarks();
  }

  private createMarksString(): string {
    return this.getMarks().map(mark => `**MARK ${mark.toUpperCase()}**\n`).join('')
  }

  ship(): string {
    return this.wrappee.ship() + `\n ${this.createMarksString()}`;
  }
}
