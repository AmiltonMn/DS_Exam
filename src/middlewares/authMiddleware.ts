import { Request, Response, NextFunction } from "express";

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
    const { name, email, phone, address, password } = req.body;

    if (!name || !email || !phone || !address || !password) {
        res.status(422).json({
            message: 'Please provide all required fields'
        });
    }

    next();
}

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
    const { login, password } = req.body;

    if (!login || !password) {
        res.status(422).json({
            message: 'Please provide all required fields'
        });
    }

    next();
}

export const validateProduct = (req: Request, res: Response, next: NextFunction) => {
    const { name, price, stock } = req.body;

    if (!name || !price || !stock) {
        res.status(422).json({
            message: 'Please provide all required fields'
        });
    }

    next();
}

export const validateOrder = (req: Request, res: Response, next: NextFunction) => {
    const { clientID, products, status } = req.body;

    if (!clientID || !products || !status) {
        res.status(422).json({
            message: 'Please provide all required fields'
        });
    }

    next();
}
