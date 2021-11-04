import { DataForView } from '../interfaces/data-for-view.interface';

export default abstract class View {
  constructor() {}

  public render(
    data: DataForView[], 
    template: (data: DataForView) => string
  ): void {
    const container = document.getElementById('render');
    if (!container) return;

    let str = '';
    data.forEach((item: DataForView) => {
      str += template(item)
    });
    container.innerHTML = str;
  }
  public abstract currencyHandler(event: any): void

  public getElement(id: string): HTMLInputElement {
    const element = document.getElementById(id);
    if (!element) {
      throw new Error(`No element found in DOM with id=${id}`);
    }
    return element as HTMLInputElement;
  }

  public setListener(id: string, listener: string, handler: (event: any) => void) {
    this.getElement(id).addEventListener(listener, handler);
  }
  
  public setValue(id: string, value: string) {
    this.getElement(id).value = value;
  }

  public setText(id: string, value: string) {
    this.getElement(id).innerText = value;
  }
}
