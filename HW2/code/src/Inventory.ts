// The Inventory class is a container for items in this fantasy game. You need to add the following methods:

// ●	Inventory.sort(): This sorts the items in the Inventory instance based on their value
// ●	Inventory.sort(comparator: ItemComparator): This sorts the items in the Inventory instance based on their weight.
// -	sort()  method is polymorphic and has 2 declarations: sort() and sort(comparator: ItemComparator)

// ●	Inventory.toString: return string representation of the item list (.join(‘, ’))

import { Item } from "./abstracts/Item";
import { ItemComparator } from './interfaces/ItemComparator';

export class Inventory {
  items: Item[] = [];

  addItem(item: Item): void {
    this.items.push(item);
  }

  toString() {
    return this.items.join(', ')
  }

  sort(): void;
  sort(comparator: ItemComparator): void;
  sort(comparator?: ItemComparator): void {
    if (comparator) {
      this.items = this.items.sort(comparator.compare);
    } else {
      this.items = this.items.sort((a, b) => a.getValue() - b.getValue());
    }
  }
}