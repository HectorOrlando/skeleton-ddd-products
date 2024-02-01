//  src\shop\products\infrastructure\ProductController.ts

import { FindAllProducts, RegisterProduct } from '../application';

type ProductResponse = {
    id: string;
    name: string;
    price: number;
    active: boolean;
}

type RegisterProductRequest = {
    name: string;
    price: number;
    active: boolean;
}

export class ProductController {
    constructor(
        public findAll: FindAllProducts,
        public register: RegisterProduct,
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

    async registerProduct(request: RegisterProductRequest): Promise<void> {
        const product = {
            name: request.name,
            price: request.price,
            active: request.active
        }
        await this.register.run(product);
    }
}