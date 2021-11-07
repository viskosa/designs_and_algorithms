// views
import ControlsView from "../view/controls-view"
import InputsView from "../view/inputs-view";
import SlidersView from "../view/sliders-view";

// model
import Api from "../model/api";
import State from "../model/state";

// helper
import { prepareData } from "../helpers/helpers";

export default class Controller {
  controlsView: ControlsView;
  currentView: InputsView | SlidersView | undefined;
  stateManager: State;
  currencyMode: string | null | undefined;

  constructor(state: State) {
    this.controlsView = new ControlsView();
    this.stateManager = state;
  }

  async getData() {
    try {
      const data = await Api.__get();
      const preparedData = prepareData(data);

      this.stateManager.setState(preparedData);
    } catch (error) {
      console.error("Something went wrong with currency request");
    }
  }

  setRadiobuttonsListeners() {
    this.controlsView.setListener("form-view-mode", "change", this.viewModeHandler)
    this.controlsView.setListener("form-currency-mode", "change", this.currencyModeHandler)
  }

  initialRenderView() {
    const viewMode = this.controlsView.getCurrentMode("form-view-mode");
    this.currencyMode = this.controlsView.getCurrentMode("form-currency-mode");

    if (!viewMode) return;

    this.currentView = this.chooseAppropriateView(viewMode);
    this.currentView?.render(this.stateManager.getState(), this.currentView.template)
  }

  setInputsListeners() {
    const state = this.stateManager.getState()
    for (let [key] of state) {
      this.currentView?.setListener(`panel-${key}`, "input", this.currencyHandler)
    }
  }

  currencyHandler = (event: any) => {
    const { target: { 
      value = "", 
      dataset: { 
        input = "", 
        currency = "" 
      } = {} 
    } = {} } = event;
    const baseValue = this.stateManager.getValue(currency, "base")
    const rateValue = this.stateManager.getValue(currency, "rate")

    switch(input) {
      case "rate":
        const convertedByRate = (Number(value) * Number(baseValue)).toFixed(2);

        this.stateManager.updateState(currency, { 
          [input]: value, 
          "target": convertedByRate
        });

        this.currentView?.updateView(this.stateManager.getState());
        break;

      case "base":
        const convertedByBase = (Number(value) / Number(rateValue)).toFixed(2);

        if (this.currencyMode === "independent") {
          this.stateManager.updateState(currency, { 
            [input]: value, 
            "target": convertedByBase
          });
        }

        if (this.currencyMode === "same") {
          const state = this.stateManager.getState();
          
          for (let [key] of state) {
            const rate = this.stateManager.getValue(key, "rate")
            const converted = (Number(value) / Number(rate)).toFixed(2);
            this.stateManager.updateState(key, { 
              [input]: value, 
              "target": converted
            });
          }
        }

        this.currentView?.updateView(this.stateManager.getState());
        break;

      case 'target':
        const convertedByTarget = (Number(value) * Number(rateValue)).toFixed(2);

        this.stateManager.updateState(currency, { 
          [input]: value, 
          "base": convertedByTarget
        });

        this.currentView?.updateView(this.stateManager.getState());
        break;
    }
  }

  // ------- helpers -------
  chooseAppropriateView(mode: string) { // maybe this method should be somwhere else?
    switch(mode) {
      case "inputs":
        return new InputsView();

      case "sliders":
        return new SlidersView();
    }
  }

  //------- radiobuttons handlers -------
  viewModeHandler = (event: any) => {
    this.currentView = this.chooseAppropriateView(event.target.value);
    this.currentView?.render(this.stateManager.getState(), this.currentView.template);
    this.setInputsListeners();
  }

  currencyModeHandler = (event: any): void => {
    this.currencyMode = event.target.value
  }
 }
