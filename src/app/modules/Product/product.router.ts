import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

// Done
router.post('/products', ProductController.addAProduct);

// Done
router.get('/products', ProductController.getAllProducts);

// Done
router.get('/products/:id', ProductController.getProductById);

// Done
router.put('/products/:id', ProductController.updateProduct);

// Done
router.delete('/products/:id', ProductController.deleteProduct);

export const ProductRoutes = router;
