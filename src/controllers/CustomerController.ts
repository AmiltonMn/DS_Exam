import { Request, Response } from "express";
import CustomerService from "../services/CustomerService";
import bcrypt from "bcrypt";

class CustomerController {

    static async NewCustomer(req: Request, res: Response) : Promise<any> {
        const { name, email, phone, address, password } = req.body;

        if (password.length < 8) {
            return res.status(422).json({
                message: 'Password must be at least 8 characters long'
            })   
        }

        try {
            let data = await CustomerService.Register(name, email, phone, address, password);

            if (data.customer === null) {
                res.status(422).json({
                    message: 'Please provide all required fields'
                })
            }

            res.status(200).json({
                message: 'Customer created successfully',
                customer: data.customer
            })
        } catch (error) {
            res.status(500).json({
                message: 'Internal server error: ' + error
            })
        }
    }

    static async LoginCustomer(req: Request, res: Response) : Promise<any> {
        const { login, password } = req.body;

        try {
            let data = await CustomerService.Login(login, password);

            if (data.customer === null) {
                res.status(422).json({
                    message: 'Invalid credentials'
                })
            }

            res.status(200).json({
                message: 'Login successful',
                customer: data.customer,
                jwt: data.jwt
            })

        } catch (error) {
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    }

    static async DeleteCustomer(req: Request, res: Response) : Promise<any> {
        const { id } = req.params;

        var response;

        try {
            
            response = await CustomerService.DeleteCustomer(id)

            if (!response) {
                res.status(404).json({
                    message: "Customer not found"
                })
            }

            res.status(200).json({
                message: "Customer deleted successfully"
            })

        } catch (error) {
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    }
}

export default CustomerController;