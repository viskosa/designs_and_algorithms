import './styles/build.styl';
import Controller from "./controller/controller";

window.addEventListener('DOMContentLoaded', async () => {
  const controller = new Controller();

  await controller.getData();
  controller.setControlsListeners();
  controller.initialRenderView();
  controller.setInputsListeners();
})
