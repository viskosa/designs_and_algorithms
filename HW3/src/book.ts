import { Item } from "./item";
import { Pages } from "./pages";

export class Book extends Item { // should be Iterable
  pages: Pages; // “pages” property keeps instance of Pages class
  title: string;
  author: string;

  constructor(title: string, author: string, pages: Pages) {
    super(pages);

    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  public toString() {
    return `Book: ${this.title} by ${this.author} with number of pages: ${this.pages.getPagesCount()}`
  }

  // getters
  public getTitle(): string {
    return this.title;
  }

  public getAuthor(): string {
    return this.author;
  }

  // setters
  public setTitle(title: string): void {
    this.title = title;
  }

  public setAuthor(author: string): void {
    this.author = author;
  }
}