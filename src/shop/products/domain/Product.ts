//  C:\Users\orgui\Documents\githubProject\node\skeleton-ddd-products\src\shop\products\domain\Product.ts

import { ProductId, ProductName } from "./";

export class Product {
    private readonly _id: ProductId;
    private readonly _name: ProductName;
    private _price: number;
    private _active: boolean;

    public constructor(
        id: ProductId,
        name: ProductName,
        price: number,
        active: boolean
    ) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._active = active;
    }

    public get id(): ProductId {
        return this._id;
    }

    public get name(): ProductName {
        return this._name;
    }

    public get price(): number {
        return this._price;
    }

    public get active(): boolean {
        return this._active;
    }

    public static register(name: string, price: number, active: boolean): Product {
        const id = ProductId.random();
        const productName = ProductName.create(name);
        return new Product(id, productName, price, active);
    }
}