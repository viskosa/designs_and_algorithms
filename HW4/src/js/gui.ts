import { IShipment } from "./types";

export class GUI {
  shipment: IShipment;

  constructor(shipment: IShipment) {
    this.shipment = shipment;
  }

  on(eventType: string, callback: (state: any) => void): void {
    const handler = this.trigger(eventType, this.shipment);
    callback(handler);
  }

  trigger(eventType: string, state: IShipment): any {
    return state[eventType]();  // how to fix TS here? The error is:
    // Element implicitly has an 'any' type because expression of type 'string' can't be used to index type 'IShipment'.
    // No index signature with a parameter of type 'string' was found on type 'IShipment'.
  }
}
