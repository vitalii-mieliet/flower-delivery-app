import { Router } from 'express';
import shopsRouter from './shops.js';
import productsRouter from './products.js';
import ordersRouter from './orders.js';

const router = Router();

router.use('/shops', shopsRouter);
router.use('/products', productsRouter);
router.use('/orders', ordersRouter);

export default router;
