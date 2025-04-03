// Tem um Post que cria um novo pedido associado ao cliente
// Tem um Get que filtra por status "/orders?status=pendente"
// Tem um PUT que cancela um pedido "/orders/:id/cancel" CASO não tenha sido enviado

import { error } from "console";
import Order from "../models/Order";

class OrderService {

    static async CreateOrder (
        clientID: string,
        products: string[],
        status: string
    ) {
        try {

            var response;

            const newOrder = new Order({
                clientID: clientID,
                products: products,
                status: status
            })
    
            await newOrder.save()
    
            return response = {
                order: newOrder
            }
        } catch(error) {
            return response = {
                order: null,
                message: error
            }
        }
    }

    static async GetOrdersByStatus(
        status?: string
    ) {
        var orders;

        if (!status) {
            return orders = await Order.find({})
        }

        orders = await Order.find(
            {
                status: status
            }
        )

        return orders;
    }

    static async CancelOrder(
        id: string
    ) {
        var order = await Order.findById(id)

        if (order === null) {
            return 0
        }

        if (order.status === 'Enviado') {
            return 1
        }

        order.updateOne(
            {
                id: id
            }, 
            {
                status: 'Cancelado'
            }
        )

        return 2
    }
}

export default OrderService;