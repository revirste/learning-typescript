"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var theShapes = [];
var myShape = new Shape_1.Shape("Octagon", 86.0);
var myCircle = new Circle_1.Circle("Circle", 3.14, 1.2);
var myRectangle = new Rectangle_1.Rectangle("Rectangle", 8.0, 4.0, 2.0);
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);
/*console.log(myShape.getInfo());
console.log();
console.log(myCircle.getInfo());
console.log();
console.log(myRectangle.getInfo()); */
for (var _i = 0, theShapes_1 = theShapes; _i < theShapes_1.length; _i++) {
    var shape = theShapes_1[_i];
    console.log(shape.getInfo());
    console.log();
}
