//  src\shop\products\application\FindAllProducts.ts

import { ProductRepository } from '../domain/ProductRepository';
import { Product } from '../domain/Product';

export class FindAllProducts {
    constructor(private readonly repository: ProductRepository) { }

    public async run(): Promise<Product[]> {
        return await this.repository.finAll();
    }
}