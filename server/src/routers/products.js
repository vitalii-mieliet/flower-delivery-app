import { Router } from 'express';
import { getProductsController } from '../controllers/products.js';

const router = Router();

router.get('/', getProductsController);

export default router;
