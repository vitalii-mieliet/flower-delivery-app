import { Router } from 'express';
import shopsRouter from './shops.js';

const router = Router();

router.use('/shops', shopsRouter);

export default router;
