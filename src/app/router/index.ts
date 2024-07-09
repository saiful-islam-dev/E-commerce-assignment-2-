import { Router } from 'express';
import { ProductRoutes } from '../modules/Product/product.router';

const router = Router();

const moduleRoutes = [
  {
    path: '/api',
    route: ProductRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
