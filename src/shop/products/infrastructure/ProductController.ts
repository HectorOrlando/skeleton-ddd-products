//  src\shop\products\infrastructure\ProductController.ts

import { FindAllProducts } from '../application';

type ProductResponse = {
    id: string;
    name: string;
    price: number;
    active: boolean;
}

export class ProductController {
    constructor(
        public findAll: FindAllProducts
    ) { }

    async findAllProducts(): Promise<ProductResponse[]> {
        const products = await this.findAll.run();
        return products.map(product => {
            return {
                id: product.id.value,
                name: product.name,
                price: product.price,
                active: product.active
            }
        });
    }
}