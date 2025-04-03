import { Request, Response } from "express";
import ProductService from "../services/ProductService";

class ProdctController {
    static async NewProduct(req: Request, res: Response): Promise<any> {
        const { name, price, stock } = req.body;

        try {
            let data = await ProductService.CreateProduct(name, price, stock);

            res.status(200).json({
                message: 'Product created successfully',
                product: data
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error: ' + error
            })
        }
    }

    static async GetProducts(req: Request, res: Response): Promise<any> {
        try {
            let data = await ProductService.GetProducts();

            if (data === null) {
                res.status(404).json({
                    message: 'No products found'
                })
            }

            res.status(200).json({
                message: 'Products retrieved successfully',
                products: data
            })

        } catch (error) {
            res.status(500).json({
                message: 'Internal server error: ' + error
            })
        }
    }

    static async DeleteProduct(req: Request, res: Response): Promise<any> {
        const { id } = req.params;

        try {

        let result = ProductService.DeleteProduct(id)

        if (!result) {
            res.status(404).json({
                message: "Product not found!"
            })
        }

        res.status(200).json({
            message: "Product deleted successfully"
        })

        } catch(error) {
            res.status(500).json({
                message: 'Internal server error: ' + error
            })
        }
    }
}

export default ProdctController;