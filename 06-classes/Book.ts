export class Book {
    /*private _title: string;
    private _isbn: string;
    private _pages: number;*/

    constructor(private _title: string, 
                private _isbn: string, 
                private _pages: number) {
        /*this._title = title;
        this._isbn = isbn;
        this._pages = pages;*/
    }

    public get title(): string {
        return this._title;
    }

    public set title(title: string) {
        this._title = title;
    }

    public get isbn(): string {
        return this._isbn;
    }

    public set isbn(isbn: string) {
        this._isbn = isbn;
    }

    public get pages(): number {
        return this._pages;
    }

    public set pages(pages: number) {
        this._pages = pages;
    }

    public toString() {
        console.log(`Title: ${this._title} \nISBN: ${this._isbn} \nPages: ${this._pages}\n`)
    }
}