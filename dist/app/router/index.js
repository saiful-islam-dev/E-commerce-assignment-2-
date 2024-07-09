"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_router_1 = require("../modules/Product/product.router");
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/api',
        route: product_router_1.ProductRoutes,
    },
];
moduleRoutes.forEach((route) => {
    router.use(route.path, route.route);
});
exports.default = router;
