import Customer from '../models/Customer';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import process from 'process';
class CustomerService {

    static async Register(
        name: string,
        email: string,
        phone: string,
        address: string,
        password: string
    ) {
        var response;

        const salt: string = await bcrypt.genSalt(12);
        const passwordHash: string = await bcrypt.hash(password, salt)

        const newCustomer = new Customer({
            name: name,
            email: email,
            phone: phone,
            address: address,
            password: passwordHash
        });

        await newCustomer.save();

        return response = {
            customer: newCustomer
        };
    }

    static async Login(
        login: string,
        password: string
    ) {
        var response;

        const customer = await Customer.findOne({
            $or: [
                { email: login },
                { name: login }
            ]
        })

        if (!customer)
            return response = {customer: null, jwt: null};

        if (!await bcrypt.compare(password, customer.password)) {
            return response = {customer: null, jwt: null}
        }

        const token = jwt.sign(
            {
                id: customer._id,
            },
            'askljdnasf230921jnldjkas210312dawd21',
            {
                expiresIn: '2 days'
            }
        )

        return response = {
            customer: customer,
            jwt: token
        }
    }

    static async DeleteCustomer(
        id: string
    ) {
        const customer = await Customer.findByIdAndDelete(id);

        if (!customer) {
            return false
        }

        return true
    }
}

export default CustomerService;