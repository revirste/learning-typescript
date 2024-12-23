import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let theShapes: Shape[] = [];

let myShape = new Shape("Octagon", 86.0);
let myCircle = new Circle("Circle", 3.14, 1.2);
let myRectangle = new Rectangle("Rectangle", 8.0, 4.0, 2.0);

theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

/*console.log(myShape.getInfo());
console.log();
console.log(myCircle.getInfo());
console.log();
console.log(myRectangle.getInfo()); */

for (let shape of theShapes) {
    console.log(shape.getInfo());
    console.log();
}