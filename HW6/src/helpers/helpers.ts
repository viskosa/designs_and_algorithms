import { DataForView } from '../interfaces/data-for-view.interface';

export const parseData = (arr: DataForView[]) => {
  const mappedData = new Map();

  for (let i = 0; i < arr.length; i++) {
    mappedData.set(arr[i].ccy, arr[i]);
  }

  return mappedData;
}