import { Shipment } from "./shipment";
import { Client } from "./client";
import { GUI } from "./gui";
import { MarksDecorator } from './marksDecorator';

const state = {
  toAddress: "address 2",
  fromAddress: "address 1",
  toZipCode: "12345", //containing exactly 5 characters
  fromZipCode: "54321", //containing exactly 5 characters
  weight: 200,
  marks: ['Fragile', 'Do not leave', 'return receipt requested']
}

const shipment = new Shipment(state);
const decoratedShipment = new MarksDecorator(shipment);
const gui = new GUI(decoratedShipment);

new Client(gui);