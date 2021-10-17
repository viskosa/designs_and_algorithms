import { Shipper } from "./shipper";

export class AirEastShipper implements Shipper {
  private packageRate: number = 0.25;
  private letterRate: number = 0.39;
  private oversizedRate: number = 10;

  getPackageCost(weight: number): number {
    return weight * this.packageRate;
  }

  getLetterCost(weight: number): number {
    return weight * this.letterRate;
  }

  getOversizedCost(weight: number): number {
    return (weight * this.packageRate) + this.oversizedRate;
  }
}
