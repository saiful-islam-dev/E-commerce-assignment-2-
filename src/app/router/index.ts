import { Router } from "express";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: "a",
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;
