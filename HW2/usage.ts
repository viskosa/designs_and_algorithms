import { Inventory } from './code/src/Inventory';
import { Item } from './code/src/Item';
import { Sword } from './code/src/Sword';
import { Pizza } from './code/src/Pizza';
import { ItemWeightComparator } from './code/src/ItemWeightComparator';

// Create the inventory
const inventory: Inventory = new Inventory();

// Create a set of items
const a: Item = new Sword(30.4219, 0.7893, 300, 2.032);
const b: Item = new Sword(40, 0.7893, 200, 2);
const c: Item = new Sword(40, 1, 100, 3);
const d: Item = new Sword(1, .5, 4, 3);
const pizza: Item = new Pizza(2, false);

// Add the items to the inventory
inventory.addItem(a);
inventory.addItem(b);
inventory.addItem(c);
inventory.addItem(d);

inventory.addItem(pizza);

// Display the inventory
console.log("inventory--------->", inventory);
console.log("inventory.toString() 1--------->", inventory.toString());

// Sort by natural order
inventory.sort();

// Display the new inventory
console.log("inventory.toString() 2--------->", inventory.toString());

// Sort by weight
inventory.sort(new ItemWeightComparator());

// Display the inventory again
console.log("inventory.toString() 3--------->", inventory.toString());

// Use the sword
console.log("a.use-1--------->", a.use());
console.log("a--------->", a);
console.log("a.use-2--------->", a.use());
console.log("a--------->", a);

console.log("d.use-1--------->", d.use());
console.log("d--------->", d);
console.log("d.use-2--------->", d.use());
console.log("d--------->", d);
console.log("d.use-3--------->", d.use());
console.log("d--------->", d);
console.log("d.polish-1--------->", d.polish());
console.log("d--------->", d);
console.log("d.polish-2--------->", d.polish());
console.log("d--------->", d);

console.log("PIZZA", pizza)
console.log(pizza.eat());
console.log("PIZZA", pizza)
console.log(pizza.eat());
console.log("PIZZA", pizza)
console.log(pizza.eat());
console.log("PIZZA", pizza)
