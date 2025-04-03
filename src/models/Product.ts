import mongoose, { Schema, Document } from 'mongoose';

interface IProduct extends Document {
    name: string;
    price: number;
    stock: number;
}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, required: true },
})

const Product = mongoose.model<IProduct>('Product', ProductSchema);

export default Product;