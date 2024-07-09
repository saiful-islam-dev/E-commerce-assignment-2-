import { Router } from 'express';
import { ProductRoutes } from '../modules/Product/product.router';
import { OrderRoutes } from '../modules/Order/order.router';

const router = Router();

const moduleRoutes = [
  {
    path: '/api',
    route: ProductRoutes,
  },
  {
    path: '/api',
    route: OrderRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
