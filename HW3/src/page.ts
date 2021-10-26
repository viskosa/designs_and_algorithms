type pageType = 'with text' | 'with article' | 'with images';
type pageMaterial = 'simple paper' | 'glossy paper';

export class Page {
  public pageNumber: number;
  public pageType: pageType;
  public pageMaterial: pageMaterial;

  constructor(pageNumber: number, pageType: pageType, pageMaterial: pageMaterial) {
    this.pageNumber = pageNumber;
    this.pageType = pageType;
    this.pageMaterial = pageMaterial;
  }

  public toString() {
    return `here is page ${this.pageType} #${this.pageNumber} and it\'s material is ${this.pageMaterial}`
  }
}

