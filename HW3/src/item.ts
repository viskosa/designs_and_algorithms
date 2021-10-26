import { PagesIterable } from "./pagesIterable";
import { Pages } from './pages';

// Mix Iterable behavior into Item’s prototype
export abstract class Item extends PagesIterable(Object) {
  protected pages: Pages;

  protected constructor(pages: Pages) {
    super();
    this.pages = pages;
  }
  
  public abstract toString(): string
}