import { Request, Response } from "express";
import OrderService from "../services/OrderService";
import { error } from "console";

class OrderController {

    static async NewOrder(req: Request, res: Response): Promise<any> {
        const { clientID, products, status } = req.body;

        try {
            let data = await OrderService.CreateOrder(clientID, products, status);

            if (data.order === null) {
                res.status(422).json({
                    message: "Could not create your order, please verifiy all fields."
                })
            }

            res.status(200).json({
                message: "Order successfully created",
                order: data
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error: ' + error
            })
        }
    }

    static async GetByStatus(req: Request, res: Response): Promise<any> {
        
        try {
            const { status } = req.query;

            if(typeof status != 'string') {
                throw error("Status error")
            }

            var data = await OrderService.GetOrdersByStatus(status)

            if (!data) {
                res.status(404).json({
                    message: "Could not found any order"
                })
            }

            res.status(200).json({
                orders: data
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error: ' + error
            })
        }
    }

    static async CancelOrder(req: Request, res: Response): Promise<any> {
        try {
            const { id } = req.params

            var data = await OrderService.CancelOrder(id)

            if (data == 0) {
                res.status(404).json({
                    message: "Order not found"
                })
            }

            if (data === 1) {
                res.status(400).json({
                    message: "You can't delete an sent order"
                })
            } else {
                res.status(200).json({
                    message: "Order successfully deleted"
                })
            }

        } catch (error) {
            res.status(500).json({
                message: 'Internal server error: ' + error
            })
        }
    }
}

export default OrderController;