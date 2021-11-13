export interface Response {
  ccy: string;
  base_ccy: string;
  buy: string;
  sale: string;
}

export interface DataForView {
  rate: string;
  base: string;
  target: string;
  base_currency: string;
  target_currency: string;
}

export type MappedData = Map<string, DataForView>;

