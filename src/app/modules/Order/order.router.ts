import express from 'express';
import { OrderController } from './oder.controller';
import validateRequest from '../../middlewares/validateRequest';
import { createOrderSchema } from './order.validation';

const router = express.Router();

router.post('/orders', validateRequest(createOrderSchema),OrderController.addAnOrder);

router.get('/orders', OrderController.getAllOrders);


// Some extra route for the future use
// // Done
// router.get('/orders/:id', OrderController.getOrderById);

// Done
// router.put('/orders/:id', OrderController.updateOrder);

// // Done
// router.delete('/orders/:id', OrderController.deleteOrder);

export const OrderRoutes = router;
