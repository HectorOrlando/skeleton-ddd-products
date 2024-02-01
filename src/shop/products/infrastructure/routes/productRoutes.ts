// src\shop\products\infrastructure\routes\productRoutes.ts

import express, { NextFunction, Request, Response } from "express";
import { productController } from '../productDependencies';
import { ErrorHandler } from "../error";

type RegisterProductRequest = {
    name: string;
    price: number;
    active: boolean;
}

// Creamos el enrutador para la entidad 'product'
export const productRouter = express.Router();

productRouter.get("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await productController.findAllProducts();
        return res.json({ products });
    } catch (error) {
        ErrorHandler.handleError(error, req, res, next);
    }
});

productRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body: RegisterProductRequest = req.body;
        const { name, price, active } = body;
        const product = { name, price, active };
        await productController.registerProduct(product);
        res.status(201).send('User created successfully').end();
    } catch (error) {
        ErrorHandler.handleError(error, req, res, next);
    }
});

