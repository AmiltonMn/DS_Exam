import axios from 'axios';
import Customer from '../models/Customer';

class CustomerService {
    static async NewCustomer(
        name: string,
        email: string,
        phone: string,
        address: string,
    ) {
        var response;

        
        if (name && email && phone && address) {

            const newCustomer = new Customer({
                name,
                email,
                phone,
                address,
            });

            return response = {
                message: 'Customer created successfully', 
                customer: newCustomer
            };
        }

        return response = {
            message: 'Please provide all required fields',
            customer: null
        }

    }
}