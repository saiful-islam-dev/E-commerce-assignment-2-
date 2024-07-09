import express from 'express';
import { OrderController } from './oder.controller';

const router = express.Router();

router.post('/orders', OrderController.addAnOrder);
router.get('/orders', OrderController.getAllOrders);
router.get('/orders/:id', OrderController.getOrderById);
router.put('/orders/:id', OrderController.updateOrder);
router.delete('/orders/:id', OrderController.deleteOrder);

export const OrderRoutes = router;
