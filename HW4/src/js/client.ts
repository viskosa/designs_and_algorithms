// Class represents the controlling object that will interact 
// with the GUI when it is available.

// The client object will obtain a single instance of the object 
// which represents the item being shipped, and then ask it to "ship itself". 
// The return from this request will be a single string indicating the shipment ID, 
// where the item was sent from, where it is going, and how much the cost was.

import { GUI } from './gui';

export class Client {
  gui: GUI;

  constructor(gui: GUI) {
    this.gui = gui;
    this.onShip();
  }

  onShip() {
    this.gui.on("ship", console.log)
  }
}
