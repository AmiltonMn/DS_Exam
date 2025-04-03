import express from 'express';
import OrderController from '../controllers/OrderController';

const router = express.Router();

router.post('', OrderController.NewOrder);
router.get('', OrderController.GetByStatus);
router.delete('/:id/cancel', OrderController.CancelOrder);

export default router;