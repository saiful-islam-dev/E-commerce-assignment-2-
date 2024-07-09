"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_router_1 = require("../modules/Product/product.router");
const order_router_1 = require("../modules/Order/order.router");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/api',
        route: product_router_1.ProductRoutes,
    },
    {
        path: '/api',
        route: order_router_1.OrderRoutes,
    },
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
