import { Page } from "./page";

export class Pages { // should provide appropriate methods to communicate with iterator
  private pages: Page[];

  constructor(pages: Page[]) {
    this.pages = pages;
  }

  getPagesCount(): number {
    return this.pages.length || 0;
  }
}
