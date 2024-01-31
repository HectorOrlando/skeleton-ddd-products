// src\shop\products\domain\ProductId.ts

import { ObjectId } from "../../shared/domain/ObjetId";

export class ProductId extends ObjectId {
    public static random(): ProductId {
        return new ProductId(super.random().value);
    }
}