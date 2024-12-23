"use strict";
class Product {
    constructor() {
        this._id = 0;
        this._price = 0;
        this._inv = 0;
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get price() {
        return this._price;
    }
    set price(price) {
        this._price = price;
    }
    get inv() {
        return this._inv;
    }
    set inv(inv) {
        this._inv = inv;
    }
}
let product1 = new Product();
let product2 = new Product();
product2.id = 10;
product2.price = 40;
product2.inv = 2;
console.log(product1.id);
console.log(product2.id);
