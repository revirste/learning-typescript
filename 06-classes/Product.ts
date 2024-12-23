class Product {
    private _id: number;
    private _price: number;
    private _inv: number;

    constructor() {
        this._id = 0;
        this._price = 0;
        this._inv = 0;
    }

    public get id(): number {
        return this._id;
    }

    public set id(id: number) {
        this._id = id;
    }

    public get price(): number {
        return this._price;
    }

    public set price(price: number) {
        this._price = price;
    }

    public get inv(): number {
        return this._inv;
    }

    public set inv(inv: number) {
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
