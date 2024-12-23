import { Shape } from "./Shape";

export class Rectangle extends Shape {

    constructor(theName: string, theArea: number, private _length: number, private _width: number) {
        super(theName, theArea);
    }


    public get length(): number {
        return this._length;
    }

    public set length(length: number) {
        this._length = length;
    }

    public get width(): number {
        return this._width;
    }

    public set width(width: number) {
        this._width = width;
    }


    public getInfo(): string {
        return super.getInfo() + `, length={${this._length}}, width={${this._width}}`;
    }

}