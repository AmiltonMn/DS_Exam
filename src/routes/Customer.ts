import express from 'express';
import CustomerController from '../controllers/CustomerController';
import { validateRegister, validateLogin } from '../middlewares/AuthMiddleware.ts';

const router = express.Router();

router.post('', validateRegister, CustomerController.NewCustomer);
router.post('/login', validateLogin, CustomerController.LoginCustomer);
router.delete('/:id', CustomerController.DeleteCustomer);

export default router;