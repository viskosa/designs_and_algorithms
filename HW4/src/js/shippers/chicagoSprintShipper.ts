import { Shipper } from "./shipper";

export class ChicagoSprintShipper implements Shipper {
  private packageRate: number = 0.20;
  private letterRate: number = 0.42;

  getPackageCost(weight: number): number {
    return weight * this.packageRate;
  }

  getLetterCost(weight: number): number {
    return weight * this.letterRate;
  }

  getOversizedCost(weight: number): number {
    return this.getPackageCost(weight);
  }
}
