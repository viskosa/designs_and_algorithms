import { Item } from "./item";
import { Pages } from "./pages";

export class Comics extends Item { // should be Iterable
  pages: Pages; // “pages” property keeps instance of Pages class
  title: string;
  author: string;
  artist: string;

  constructor(title: string, author: string, artist: string, pages: Pages) {
    super(pages);

    this.title = title;
    this.author = author;
    this.artist = artist;
    this.pages = pages;
  }

  public toString() {
    return `Comics: ${this.title} by ${this.author}, the artist is ${this.artist}, number of pages: ${this.pages.getPagesCount()}`
  }

  // getters
  public getTitle(): string {
    return this.title;
  }

  public getAuthor(): string {
    return this.author;
  }

  public getArtist(): string {
    return this.artist;
  }

  // setters
  public setTitle(title: string): void {
    this.title = title;
  }

  public setAuthor(author: string): void {
    this.author = author;
  }

  public setArtist(artist: string): void {
    this.artist = artist;
  }
}