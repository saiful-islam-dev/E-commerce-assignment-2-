import express from 'express';
import { ProductController } from './product.controller';
import validateRequest from '../../middlewares/validateRequest';
import { productSchemaZod, updateProductSchemaZod } from './product.validation';

const router = express.Router();

router.post(
  '/products',
  validateRequest(productSchemaZod),
  ProductController.addAProduct,
);

router.get('/products', ProductController.getAllProducts);

router.get('/products/:id', ProductController.getProductById);

router.put(
  '/products/:id',
  validateRequest(updateProductSchemaZod),
  ProductController.updateProduct,
);

router.delete('/products/:id', ProductController.deleteProduct);

export const ProductRoutes = router;
