import { DataForView, Response } from '../interfaces/data-for-view.interface';

export const prepareData = (arr: Response[]) => {
  return arr.map(item => {
    const obj: DataForView = {
      rate: item.buy,
      base: "100",
      target: (100 * +item.buy).toFixed(2),
      base_currency: item.base_ccy,
      target_currency: item.ccy
    };

    return obj;
  })
}
