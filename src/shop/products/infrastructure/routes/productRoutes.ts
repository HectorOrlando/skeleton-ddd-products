// src\shop\products\infrastructure\routes\productRoutes.ts

import express, { NextFunction, Request, Response } from "express";
import { productController } from '../productDependencies';
import { ErrorHandler } from "../error/ErrorHandler";

// Creamos el enrutador para la entidad 'product'
export const productRouter = express.Router();

productRouter.get("/products", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const products = await productController.findAllProducts();
        return res.json({ products });
    } catch (error) {
        ErrorHandler.handleError(error, req, res, next);
    }
});

