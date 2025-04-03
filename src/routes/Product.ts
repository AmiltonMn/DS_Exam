import express from 'express';
import ProductController from '../controllers/ProductController';

const router = express.Router();

router.post('', ProductController.NewProduct);
router.get('', ProductController.GetProducts);
router.delete('/:id', ProductController.DeleteProduct);

export default router;