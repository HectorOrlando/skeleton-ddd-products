//   src\shop\products\infrastructure\MongoProductRepository.ts

import { Collection, ObjectId } from 'mongodb';
import { dbConnection } from '../../shared/infrastructure/connections/Connection';

import { Product } from '../domain/Product';
import { ProductRepository } from '../domain/ProductRepository';
import { ProductId } from '../domain/ProductId';

type UserPrimitives = {
    _id: ObjectId;
    name: string;
    price: number;
    active: boolean;
}

export class MongoProductRepository implements ProductRepository {
    private collection!: Collection<UserPrimitives>;

    constructor() { this.connect(); }

    private async connect(): Promise<void> {
        const db = await dbConnection();
        this.collection = db.collection('products');
        if (!this.collection) {
            throw new Error('The connection to the users Collection of the database is not established');
        }
    }

    async finAll(): Promise<Product[]> {
        try {
            const productFound = await this.collection.find({
                active: true
            }).toArray();
            return productFound.map(product => {
                return new Product(
                    new ProductId(product._id.toHexString()),
                    product.name,
                    product.price,
                    product.active
                )
            });

        } catch (error) {
            throw new Error("Error findAll products list.");
        }
    }
}