import mongoose, { Schema, Document } from 'mongoose';
import Product from './Product';

interface IOrder extends Document {
    clientID: string,
    products: string[],
    status: string
}

const OrderSchema: Schema = new Schema({
    clientID: { type: String, required: true},
    products: { type: [String], required: true},
    status: { type: String, required: true}
})

const Order = mongoose.model<IOrder>('Order', OrderSchema);

export default Order;