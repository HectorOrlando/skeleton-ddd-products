//  src\shop\products\application\RegisterProduct.ts

import { Product, ProductRepository } from "../domain";

type Request = {
    name: string;
    price: number;
    active: boolean;
}

export class RegisterProduct {
    constructor(readonly repository: ProductRepository) { }
    
    async run(request: Request): Promise<void> {
        const product = Product.register(request.name, request.price, request.active);
        this.repository.register(product);
    }
}