"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    /*private _title: string;
    private _isbn: string;
    private _pages: number;*/
    function Book(_title, _isbn, _pages) {
        this._title = _title;
        this._isbn = _isbn;
        this._pages = _pages;
        /*this._title = title;
        this._isbn = isbn;
        this._pages = pages;*/
    }
    Object.defineProperty(Book.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (title) {
            this._title = title;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "isbn", {
        get: function () {
            return this._isbn;
        },
        set: function (isbn) {
            this._isbn = isbn;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Book.prototype, "pages", {
        get: function () {
            return this._pages;
        },
        set: function (pages) {
            this._pages = pages;
        },
        enumerable: false,
        configurable: true
    });
    Book.prototype.toString = function () {
        console.log("Title: ".concat(this._title, " \nISBN: ").concat(this._isbn, " \nPages: ").concat(this._pages, "\n"));
    };
    return Book;
}());
exports.Book = Book;
