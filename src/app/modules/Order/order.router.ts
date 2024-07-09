import express from 'express';
import { OrderController } from './oder.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createOrderSchema } from './order.validation';

const router = express.Router();

// Done full
router.post('/orders', validateRequest(createOrderSchema),OrderController.addAnOrder);

// Done full
router.get('/orders', OrderController.getAllOrders);

// // Done
// router.get('/orders/:id', OrderController.getOrderById);

// Done
// router.put('/orders/:id', OrderController.updateOrder);

// // Done
// router.delete('/orders/:id', OrderController.deleteOrder);

export const OrderRoutes = router;
