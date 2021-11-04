// import Controller from "../controller/controller";

// export default class InitView {
//   controller: Controller;

//   constructor() {
//     this.controller = Controller.getInstance();
//   }

//   init = () => {
//     const viewForm = document.getElementById('form-view');
//     const modeForm = document.getElementById('form-mode');
  
//     viewForm && viewForm.addEventListener('change', this.viewHandler)
//     modeForm && modeForm.addEventListener('change', this.modeHandler)
//   };

//   viewHandler = (event: any) => {
//     // call appropriate render method
//     this.controller.renderAppropriateView(event.target.value)
//   }

//   modeHandler = () => {
//     // do smth through Singleton
//     console.log("modeHandler")
//   }

// }