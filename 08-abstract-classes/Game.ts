export abstract class Game {
    protected _title: string;
    protected _rating: string;

    constructor(title: string, rating: string) {
        this._title = title;
        this._rating = rating;
    }

    abstract get title(): string;
    abstract set title(title: string);

    abstract get rating(): string;
    abstract set rating(rating: string);
}