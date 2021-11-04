import View from "./view";
import { DataForView } from '../interfaces/data-for-view.interface';

class InputsView extends View {
  template = ({ ccy, base_ccy, buy }: DataForView) => {
    return `
      <fieldset class="panel margin--b-10" id="panel-${ccy}">
        <legend class="panel__legend">${ccy}</legend>
        <div class="fl fl--align-center margin--b-20">
          <p class="margin--r-20">1 ${ccy} is </p>
          <input id="rate-${ccy}" data-input="rate" data-currency="${ccy}" class="panel__input margin--r-20" type="text" value=${buy}>
          <p>${base_ccy}</p>
        </div>
        <div class="fl fl--align-center">
          <div class="fl--dir-column margin--r-20">
            <p class="margin--b-10">${base_ccy} (base currency)</p>
            <input id="base-${ccy}" data-input="base" data-currency="${ccy}" class="panel__input" type="text" value="100"/>
          </div>
          <div class="fl--dir--column">
            <p class="margin--b-10">${ccy} (target currency)</p>
            <input id="target-${ccy}" data-input="target" data-currency="${ccy}" class="panel__input" type="text" value=""/>
          </div>
        </div>
      </fieldset>`
  };

  currencyHandler = (event: any) => {
    const { target: { value = "", dataset: { input = "", currency = "" } = {} } = {} } = event;

    switch(input) {
      case 'rate':
        const baseValue = this.getElement(`base-${currency}`).value;
        const converted1 = +(Number(value) * Number(baseValue)).toFixed(2);
        this.setValue(`target-${currency}`, `${converted1}`);
        break;

      case 'base':
        const rateValue1 = this.getElement(`rate-${currency}`).value;
        const converted2 = +(Number(value) / Number(rateValue1)).toFixed(2);
        this.setValue(`target-${currency}`, `${converted2}`);
        break;

      case 'target':
        const rateValue2 = this.getElement(`rate-${currency}`).value;
        const converted3 = +((Number(value) * Number(rateValue2))).toFixed(2);
        this.setValue(`base-${currency}`, `${converted3}`);
        break;
    }
  }
}

export default InputsView;
