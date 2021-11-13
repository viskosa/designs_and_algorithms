import View from "./view";
import { DataForView, MappedData } from '../interfaces/data-for-view.interface';

class SlidersView extends View {
  template = ({ base_currency, target_currency, base, rate, target }: DataForView) => {
    return `
      <fieldset class="panel margin--b-10" id="panel-${target_currency}">
        <legend class="panel__legend">${target_currency}</legend>
        <div class="fl fl--align-center margin--b-20">
          <p class="margin--r-20">1 ${target_currency} is 
            <span id="rate-${target_currency}">${Number(rate).toFixed(2)}</span> 
            ${base_currency}
          </p>
        </div>

        <div class="fl fl--align-center">
          <div class="fl--dir-column margin--r-20">
            <p class="margin--b-10">${base_currency}: 
              <span id="base-text-${target_currency}">${base}</span>
            </p>
            <input id="base-${target_currency}" data-input="base" data-currency="${target_currency}" class="panel__input" type="range" min="0" max=${5000 * Number(rate)} step="1" value="${base}"/>
          </div>
          <div class="fl--dir--column">
            <p class="margin--b-10">${target_currency}: 
              <span id="target-text-${target_currency}">${target}</span>
            </p>
            <input id="target-${target_currency}" data-input="target" data-currency="${target_currency}" class="panel__input" type="range" min="0" max="5000" step="1" value="${target}"/>
          </div>
        </div>
      </fieldset>`
  };

  updateView = (state: MappedData) => {
    for (let [key, object] of state) {
      this.setText(`base-text-${key}`, object.base);
      this.setText(`target-text-${key}`, object.target);

      this.setValue(`base-${key}`, object.base);
      this.setValue(`target-${key}`, object.target);
    }
  }
}

export default SlidersView;
