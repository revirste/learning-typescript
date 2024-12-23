import { Game } from "./Game";

export class ShootingGame extends Game {

    private _cameraType: string;

    constructor(title: string, rating: string, cameraType: string) {
        super(title, rating);
        this._cameraType = cameraType;
    }

    public get title(): string {
        return this._title;
    }
    
    public set title(title: string) {
        this._title = title;
    }

    public get rating(): string {
        return this._rating;
    }

    public set rating(rating: string) {
        this._rating = rating;
    }

    public get cameraType(): string {
        return this._cameraType;
    }

    public set cameraType(cameraType: string) {
        this._cameraType = cameraType;
    }

    public toString(): string {
        return `Title: ${this._title}\nRating: ${this._rating}\nCamera Type: ${this._cameraType}`
    }
}