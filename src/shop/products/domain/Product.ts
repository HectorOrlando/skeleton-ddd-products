//  C:\Users\orgui\Documents\githubProject\node\skeleton-ddd-products\src\shop\products\domain\Product.ts

import { ProductId } from "./ProductId";

export class Product {
    private readonly _id: ProductId;
    private _name: string;
    private _price: number;
    private _active: boolean;

    public constructor(
        id: ProductId,
        name: string,
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

    public get name(): string {
        return this._name;
    }

    public get price(): number {
        return this._price;
    }

    public get active(): boolean {
        return this._active;
    }

}