import Api from "../model/api";
import ControlsView from "../view/controls-view"
import InputsView from "../view/inputs-view";
import SlidersView from "../view/sliders-view";
import { DataForView } from '../interfaces/data-for-view.interface';
import { parseData } from '../helpers/helpers';

export default class Controller {
  data: DataForView[];
  controlsView: ControlsView;
  currentView: InputsView | SlidersView | undefined;
  mappedData: any // fix type!

  constructor() {
    this.data = [];
    this.controlsView = new ControlsView();
  }

  async getData() { // ok
    this.data = await Api.__get();
    console.log(this.data)
    this.mappedData = parseData(this.data);
    console.log(this.mappedData)
  }

  initialRenderView() { // ok
    const viewMode = this.controlsView.getCurrentMode('form-view-mode');
    const currencyMode = this.controlsView.getCurrentMode('form-currency-mode');

    if (!viewMode) return;
    this.currentView = this.chooseAppropriateView(viewMode);
    this.currentView?.render(this.data, this.currentView.template)
  }

  setControlsListeners() { // ok
    this.controlsView.setListener('form-view-mode', 'change', this.viewModeHandler)
    this.controlsView.setListener('form-currency-mode', 'change', this.currencyModeHandler)
  }

  setInputsListeners() { // ok
    this.data.forEach(item => {
      this.currentView?.setListener(`panel-${item.ccy}`, 'input', this.currentView?.currencyHandler)
    })
  }


  // ------- helpers -------
  chooseAppropriateView(mode: string) { // maybe this method should be somwhere else?
    switch(mode) {
      case 'inputs':
        return new InputsView();

      case 'sliders':
        return new SlidersView();
    }
  }


  //------- radiobuttons handlers -------
  viewModeHandler = (event: any) => { // ok
    this.currentView = this.chooseAppropriateView(event.target.value);
    this.currentView?.render(this.data, this.currentView.template);
    this.setInputsListeners();
  }

  currencyModeHandler = (event: any) => {
    // do smth through Singleton
    console.log(event.target.value)
  }
 }
