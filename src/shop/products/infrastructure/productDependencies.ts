//  src\shop\products\infrastructure\productDependencies.ts

import { ProductController } from './ProductController'
import { MongoProductRepository } from './MongoProductRepository'
import { FindAllProducts } from '../application'

const productRepository = new MongoProductRepository();

export const productFinAll = new FindAllProducts(productRepository);

export const productController = new ProductController(
    productFinAll
);