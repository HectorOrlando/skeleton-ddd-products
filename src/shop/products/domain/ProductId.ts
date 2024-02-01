// src\shop\products\domain\ProductId.ts

import { ObjectId } from "../../shared/domain/ObjectId";

export class ProductId extends ObjectId {
    constructor(id: string) {
        super(id);
    }

    // Método estático para generar un ProductId aleatorio
    public static random(): ProductId {
        return new ProductId(super.random().value);
    }
}
