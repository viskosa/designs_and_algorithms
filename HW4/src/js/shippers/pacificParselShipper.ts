import { Shipper } from "./shipper";

export class PacificParselShipper implements Shipper {
  private packageRate: number = 0.51;
  private letterRate: number = 0.19;
  private oversizedRate: number = 0.2;

  getPackageCost(weight: number): number {
    return weight * this.packageRate;
  }

  getLetterCost(weight: number): number {
    return weight * this.letterRate;
  }

  getOversizedCost(weight: number): number {
    return this.getPackageCost(weight) + (weight * this.oversizedRate);
  }
}
