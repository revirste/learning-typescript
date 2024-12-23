import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(theName: string, theArea: number, private _radius: number) {
        super(theName, theArea);
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(radius: number) {
        this._radius = radius;
    }

    public getInfo(): string {
        return super.getInfo() + `, radius={${this._radius}}`;
    }

}