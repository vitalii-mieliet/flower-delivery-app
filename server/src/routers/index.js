import { Router } from 'express';
import shopsRouter from './shops.js';
import productsRouter from './products.js';

const router = Router();

router.use('/shops', shopsRouter);
router.use('/products', productsRouter);

export default router;
