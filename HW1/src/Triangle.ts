// Create class `Triangle` that takes 3 points as it's vertices. Triangle must inherit
// `Shape` abstract class. `Triangle` should contain:
// a constructor (use multiple constructors declaration for Typescript) which creates
// `Triangle` class using three instances of `Point` class, may also provide color and
// filled properties;

import { Shape } from './Shape';
import { Point } from "./Point";

type Accumulator = {
  [key: string]: number
}
export class Triangle extends Shape {
  public constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
    super([point1, point2, point3], color, filled);

    if (this.points.length > 3) {
      throw new Error;
    } else {
      this.points = [point1, point2, point3];
    }
  }

  // override `toString()` method, it should return a `Triangle` class stringified
  // representation in format `"Triangle[v1=(x1, y1),v2=(x2, y2),v3=(x3, y3)]"`;
  public toString(): string {
    const string = this.points.map((item, i) => `v${i+1}=${item}`);
    return `Triangle[${string}]`;
  }

  // override `getType()` method, which prints `"equilateral triangle"` if all the three
  // sides are equal, `"isosceles triangle"` if any two of the three sides are equal, or
  // `"scalene triangle"` if all sides are different.
  public getType(): string {
    const sides = [];
    for (let i = 0; i < this.points.length; i++) {
      sides.push(this.points[i].distance(this.points[i+1])) 
    }

    const duplicates: Accumulator = sides.reduce((acc, item) => (
      { ...acc,
        [item]: ((acc as any)[item] || 0) + 1 // how TS works here -???
      }), {});
    
    if (Object.values(duplicates).indexOf(3) != -1) {
      return 'equilateral triangle';
    }

    if (Object.values(duplicates).indexOf(2) != -1) {
      return 'isosceles triangle';
    } 
  
    return 'scalene triangle';
  }
}
