// import Api from "../model/api";
// import InputsView from "../view/inputs-view";
// import SlidersView from "../view/sliders-view";
// import { DataForView } from '../interfaces/data-for-view.interface';

// class Controller {
//   private static controller: Controller;

//   viewMode: string;
//   currencyMode: string;
//   data: DataForView[];
//   inputsView: InputsView;
//   slidersView: SlidersView;

//   constructor() {
//     this.viewMode = 'inputs'; // sliders
//     this.currencyMode = 'same'; // independent
//     this.data = [];

//     this.inputsView = new InputsView();
//     this.slidersView = new SlidersView();

//     this.init();
//   }

//   async init() {
//     // initial currencies request
//     this.data = await Api.__get();
//     console.log(this.data)

//     // render default view
//     this.renderAppropriateView(this.viewMode)
//   }

//   public renderAppropriateView(mode: string) { // maybe this method should be somwhere else?
//     switch(mode) {
//       case 'inputs':
//         return this.inputsView.render(this.data);

//       case 'sliders':
//         return this.slidersView.render(this.data);
//     }
//   }

//   // Singleton - we have only one instance of Controller
//   public static getInstance(): Controller {
//     if (!Controller.controller) {
//       Controller.controller = new Controller();
//     }
//     return Controller.controller;
//   }
// }

// export default Controller;