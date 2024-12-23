import { Book } from "./Book";

class Person {
    private _firstName: string;
    private _lastName: string;
    private _books: Book[] = [];

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(firstName: string) {
        this._firstName = firstName;
    }

    public get lastName(): string {
        return this._lastName
    }

    public set lastName(lastName: string) {
        this._lastName = lastName;
    }

    public get books(): Book[] {
        return this._books;
    }

    public set books(books: Book[]) {
        this._books = books;
    }

    public toString(): void {
        console.log(`${this.firstName} ${this.lastName}`);
    }

    public printBooks(): void {
        for (let book of this._books) {
            book.toString();
        }
    }
}

let book1 = new Book("MyBook1", "ISBN-01", 25);
let book2 = new Book("MyBook2", "ISBN-02", 76);

let person1 = new Person("Nicholas", "Black");
let person2 = new Person("Elliott", "Douglas");

person1.firstName = "Nicole";
person1.books = [book1, book2];


person1.toString();
person1.printBooks();
person2.toString();