// Class represents the object being shipped.

import { IState, IShipment } from "./types";
import { Shipper } from './shippers/shipper';
import { AirEastShipper } from './shippers/airEastShipper';
import { ChicagoSprintShipper } from './shippers/chicagoSprintShipper';
import { PacificParselShipper } from './shippers/pacificParselShipper';

let shipmentId = 0;

export class Shipment implements IShipment {
  state: IState;
  shipper: Shipper;
  cost: number;

  constructor(state: IState) {
    this.state = state;
    this.setShipper();
    this.getCost();
  }

  getShipmentId(): number {
    return this.state.shipmentId ? 
          this.state.shipmentId : 
          shipmentId++;
  }

  ship(): string {
    return `Shipment with the ID ${this.getShipmentId()} will be picked from  
    ${this.state.fromAddress} and shipped to ${this.state.toAddress}. 
    Cost = ${this.cost}`
  }

  setShipper(): void {
    switch(this.state.fromZipCode[0] ? this.state.fromZipCode[0] : null) {
      case '4':
      case '5':
      case '6':
        this.shipper = new ChicagoSprintShipper();
        break;

      case '7':
      case '8':
      case '9':
        this.shipper = new PacificParselShipper();
        break;
      
      default:
        this.shipper = new AirEastShipper();
    }
  }

  // maybe 'if' statements should be wtitten somewhere else in a more appropriate place, but where?
  getCost(): void {
    if (this.state.weight <= 15) {
      this.cost = this.shipper.getLetterCost(this.state.weight);
    }

    if (this.state.weight > 15 && this.state.weight <= 160) {
      this.cost = this.shipper.getPackageCost(this.state.weight);
    }

    if (this.state.weight > 160) {
      this.cost = this.shipper.getOversizedCost(this.state.weight);
    }
  }

  getMarks(): string[] {
    return this.state.marks;
  }
}