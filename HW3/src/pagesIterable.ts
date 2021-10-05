// PagesIterable mixin:
// a.	You can use 3rd library or Symbol.iterator to implement PagesIterable mixin
// b.	the “for..of”, spread operator (“…”) and other data consumers should work 
// with your iterables (Book, Magazine, Comics)

interface IResult {
  done: boolean;
  value: string | undefined;
}

export const PagesIterable = (superclass: any) => class extends superclass {
  [Symbol.iterator] = () => {
    let i = 0;
    const description = this.toString();
    const { pages } = this.pages;

    // iterator
    return {
      next(): IResult {
        if (i < pages.length) {
          const value = `${description}, ${pages[i].toString()}`;
          i++;
          return { done: false, value }
        } else {
          return { done: true, value: undefined }
        }
      }
    }
  }
}
