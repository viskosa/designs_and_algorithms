import { DataForView, MappedData } from '../interfaces/data-for-view.interface';

export default class State {
  state: MappedData;

  constructor() {
    this.state = new Map<string, DataForView>();
  }

  setState = (arr: DataForView[]): void => {
    for (let item of arr) {
      this.state.set(item.target_currency, item)
    }
  }

  updateState = (key: string, value: any ): void => {
    const currentValue = this.state.get(key);
    this.state.set(key, {
      ...currentValue, 
      ...value 
    })
  }

  getState = (): MappedData => this.state;

  getValue = (key: string, subkey: any) => this.state.get(key)?.[subkey as keyof DataForView]
}
