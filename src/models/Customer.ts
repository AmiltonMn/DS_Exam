import mongoose, { Schema, Document } from 'mongoose';

interface ICustomer extends Document {
    name: string;
    email: string;
    phone: string;
    address: string;
    password: string;
}

const CustomerSchema: Schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phone: {type: String, required: true},
    address: {type: String, required: true},
    password: {type: String, required: true},
})

const Customer = mongoose.model<ICustomer>('Customer', CustomerSchema);

export default Customer;