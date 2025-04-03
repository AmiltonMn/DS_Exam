import express from 'express';
import ProductController from '../controllers/ProductController';
import { validateProduct } from '../middlewares/AuthMiddleware';

const router = express.Router();

router.post('', validateProduct, ProductController.NewProduct);
router.get('', ProductController.GetProducts);
router.delete('/:id', ProductController.DeleteProduct);

export default router;