// The ItemWeightComparator class implements the ItemComparator interface, meaning instances 
// of it can be passed to methods requiring a comparator for objects of type Item.

// ●	The compare(first: Item, second: Item) method of ItemWeightComparator should function 
// similarly to the compareTo(other: Item) method of the Item class, but for the weight field 
// of the Items. If the weights are equal, this method should call the compareTo(other: Item) 
// method of the first Item and return the resulting value.


import { Item } from './abstracts/Item';
import { ItemComparator } from './interfaces/ItemComparator';

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item) {
        const weight1 = first.getWeight();
        const weight2 = second.getWeight();

        return weight1 === weight2 ? 
            first.compareTo(second) :
            weight1 > weight2 ? 1 : -1;
    }
}
