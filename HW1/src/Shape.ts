// Create abstract superclass called `Shape`, which contains:
// - two protected instance variables: `color` (string), `filled` (boolean) and `points` (Point[]);
// - overloaded constructor (use multiple constructors declaration for Typescript):
//   a constructor that takes a list of `points` and initializes the color to `"green"`
//   and filled to `true` by default, and a constructor that takes a list of `points`,
//   the `color` and `filled` properties;

import { Point } from "./Point";

export abstract class Shape {
    abstract getType(): string;
    protected color: string;
    protected filled: boolean;
    protected points: Point[];

    public constructor(points: Point[], color?: string, filled?: boolean) {
        this.color = color || "green";
        this.filled = filled !== undefined ? filled : true;
        if (points.length > 2) {
            this.points = points;
        } else {
            throw new Error;
        }
    }

    // - `toString()` method that returns `"A Shape with color of xxx and filled/Not filled. Points: (x1, y1), (x2, y2)..."`;
    public toString(): string {
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled': 'not filled'}. Points: ${this.points.join(", ")}.`
    }

    // - `getPerimeter()` that calculates the perimeter using `Point.distance` method;
    public getPerimeter(): number {
        let perimeter = 0;
        for (let i = 0; i < this.points.length; i++) {
           perimeter += this.points[i].distance(this.points[i+1])
        }
        return +perimeter.toFixed(1);
    }
}
