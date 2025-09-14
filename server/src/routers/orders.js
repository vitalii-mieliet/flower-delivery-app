import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { createOrderSchema } from '../validation/orders.js';
import { createOrderController } from '../controllers/orders.js';

const router = Router();

router.post('/', validateBody(createOrderSchema), createOrderController);

export default router;
