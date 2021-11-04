import View from "./view";
import { DataForView } from '../interfaces/data-for-view.interface';

class SlidersView extends View {
  template = ({ ccy, base_ccy, buy }: DataForView) => {
    return `
      <fieldset class="panel margin--b-10" id="panel-${ccy}">
        <legend class="panel__legend">${ccy}</legend>
        <div class="fl fl--align-center margin--b-20">
          <p class="margin--r-20">1 ${ccy} is 
            <span id="rate-${ccy}">${Number(buy).toFixed(2)}</span> 
            ${base_ccy}
          </p>
        </div>

        <div class="fl fl--align-center">
          <div class="fl--dir-column margin--r-20">
            <p class="margin--b-10">${base_ccy}: 
              <span id="base-text-${ccy}"> </span>
            </p>
            <input id="base-${ccy}" data-input="base" data-currency="${ccy}" class="panel__input" type="range" min="0" max=${1000 * Number(buy)} step="any" value=""/>
          </div>
          <div class="fl--dir--column">
            <p class="margin--b-10">${ccy}: 
              <span id="target-text-${ccy}"> </span>
            </p>
            <input id="target-${ccy}" data-input="target" data-currency="${ccy}" class="panel__input" type="range" min="0" max="1000" step="any" value=""/>
          </div>
        </div>
      </fieldset>`
  };

  currencyHandler = (event: any) => { 
    const { target: { value = "", dataset: { input = "", currency = "" } = {} } = {} } = event;

    switch(input) {
      case 'base':
        const rateValue1 = this.getElement(`rate-${currency}`).innerText;
        const converted1 = +(Number(value) / Number(rateValue1)).toFixed(2);

        this.setText(`base-text-${currency}`, `${Number(value).toFixed(2)}`);
        this.setText(`target-text-${currency}`, `${converted1}`);
        this.setValue(`target-${currency}`, `${converted1}`);
        break;

      case 'target':
        const rateValue2 = this.getElement(`rate-${currency}`).innerText;
        const converted2 = +(Number(value) * Number(rateValue2)).toFixed(2);

        this.setText(`target-text-${currency}`, `${Number(value).toFixed(2)}`);
        this.setText(`base-text-${currency}`, `${converted2}`);
        this.setValue(`base-${currency}`, `${converted2}`);
        break;
    }  
  }
}

export default SlidersView;
