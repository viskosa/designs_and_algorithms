import './styles/build.styl';
import Controller from "./controller/controller";
import State from "./model/state";

window.addEventListener('DOMContentLoaded', async () => {
  const state = new State();
  const controller = new Controller(state);

  await controller.getData();
  controller.setRadiobuttonsListeners();
  controller.initialRenderView();
  controller.setInputsListeners();
})
