import { Express } from "express";
import express from "express";
import CustomerRoute from "./Customer";
import ProductRoute from "./Product"

export default function (app: Express) {
    app.use(express.json())
       .use('/customers', CustomerRoute)
       .use('/products', ProductRoute)
}