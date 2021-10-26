export interface IState {
  shipmentId?: number;
  toAddress: string;
  fromAddress: string;
  toZipCode: string; //containing exactly 5 characters - how to do that in TypeScript?
  fromZipCode: string; //containing exactly 5 characters
  weight: number;
  marks?: string[];
}

export interface IShipment {
  ship: () => string;
  getMarks: () => string[];
}
