import View from "./view";
import { DataForView, MappedData } from '../interfaces/data-for-view.interface';

class InputsView extends View {
  template = ({ base_currency, target_currency, base, rate, target }: DataForView) => {
    return `
      <fieldset class="panel margin--b-10" id="panel-${target_currency}">
        <legend class="panel__legend">${target_currency}</legend>
        <div class="fl fl--align-center margin--b-20">
          <p class="margin--r-20">1 ${target_currency} is </p>
          <input id="rate-${target_currency}" data-input="rate" data-currency="${target_currency}" class="panel__input margin--r-20" type="text" value=${rate} autocomplete="off">
          <p>${base_currency}</p>
        </div>
        <div class="fl fl--align-center">
          <div class="fl--dir-column margin--r-20">
            <p class="margin--b-10">${base_currency} (base currency)</p>
            <input id="base-${target_currency}" data-input="base" data-currency="${target_currency}" class="panel__input" type="text" value="${base}" autocomplete="off">
          </div>
          <div class="fl--dir--column">
            <p class="margin--b-10">${target_currency} (target currency)</p>
            <input id="target-${target_currency}" data-input="target" data-currency="${target_currency}" class="panel__input" type="text" value="${target}" autocomplete="off">
          </div>
        </div>
      </fieldset>`
  };

  updateView = (state: MappedData) => {
    for (let [key, object] of state) {
      this.setValue(`rate-${key}`, object.rate);
      this.setValue(`base-${key}`, object.base);
      this.setValue(`target-${key}`, object.target);
    }
  }
}

export default InputsView;
