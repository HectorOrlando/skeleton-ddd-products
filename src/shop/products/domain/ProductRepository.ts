//   src\shop\products\domain\ProductRepository.ts

import { Product } from './Product';

export interface ProductRepository {
    finAll(): Promise<Product[]>;
    register(product: Product): Promise<void>;
}