//  Create a `Point` class, which creates 2 dimensional point with coordinates
export class Point {
  // two instance variables `x` and `y`; --- ???
  x: number;
  y: number;

  public constructor(x?: number, y?: number) {
    // default constructor which creates a point at the location of (0, 0);
    // overloaded constructor (use multiple constructors declaration for Typescript) which creates a point by `x` and `y` coordinates;
    this.x = x || 0;
    this.y = y || 0;
  }

  // `toString()` method should return a `Point` class stringified representation in format: `"(x, y)"`;
  public toString(): string {
    return `(${this.x}, ${this.y})`
  }

  // `distance()` method should be overloaded (use multiple methods declaration for Typescript) with next implementations:
  distance(): number;                     // no args: distance from this point to (0, 0);
  distance(other: Point): number;         // distance(other: Point)` - distance from this point to a given instance of `Point`
  distance(x: number, y: number): number; // distance from this point to a given point (x, y)
  public distance( x?: Point | number, y?: number) {
    if (x instanceof Point) {
      return this.doCalculates(x.x, x.y);
    }

    if (x && y && typeof x === 'number') {
      return this.doCalculates(x, y);
    }

    return this.doCalculates(0, 0);
  }

  private doCalculates(x: number, y: number) {
    const xDiff = x - this.x;
    const yDiff = y - this.y;
    const xDiffSquared = Math.pow(xDiff, 2);
    const yDiffSquared = Math.pow(yDiff, 2);
    return +Math.sqrt(xDiffSquared + yDiffSquared).toFixed(1);
  }
}
