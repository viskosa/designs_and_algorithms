// 'Strategy' pattern - we declare an interface and then 
// concrete classes implement this interface with different behavior of methods

export interface Shipper {
  getLetterCost(weight: number): number
  getPackageCost(weight: number): number
  getOversizedCost(weight: number): number
}
