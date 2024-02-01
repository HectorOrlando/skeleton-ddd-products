//  src\shop\products\application\FindAllProducts.ts

import { Product, ProductRepository } from '../domain';

export class FindAllProducts {
    constructor(private readonly repository: ProductRepository) { }

    public async run(): Promise<Product[]> {
        return await this.repository.finAll();
    }
}