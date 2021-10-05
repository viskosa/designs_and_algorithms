import { Item } from "./item";
import { Pages } from "./pages";

export class Magazine extends Item { // should be Iterable
  pages: Pages; // “pages” property keeps instance of Pages class
  title: string;

  constructor(title: string, pages: Pages) {
    super(pages);

    this.title = title;
    this.pages = pages;
  }

  public toString() {
    return `Magazine: ${this.title} with number of pages: ${this.pages.getPagesCount()}`
  }

  // getter
  public getTitle(): string {
    return this.title;
  }

  // setter
  public setTitle(title: string): void {
    this.title = title;
  }
}