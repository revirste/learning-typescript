"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this._books = [];
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (firstName) {
            this._firstName = firstName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (lastName) {
            this._lastName = lastName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Person.prototype, "books", {
        get: function () {
            return this._books;
        },
        set: function (books) {
            this._books = books;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.toString = function () {
        console.log("".concat(this.firstName, " ").concat(this.lastName));
    };
    Person.prototype.printBooks = function () {
        for (var _i = 0, _a = this._books; _i < _a.length; _i++) {
            var book = _a[_i];
            book.toString();
        }
    };
    return Person;
}());
var book1 = new Book_1.Book("MyBook1", "ISBN-01", 25);
var book2 = new Book_1.Book("MyBook2", "ISBN-02", 76);
var person1 = new Person("Nicholas", "Black");
person1.firstName = "Nicole";
person1.books = [book1, book2];
var person2 = new Person("Elliott", "Douglas");
person1.toString();
person1.printBooks();
person2.toString();
