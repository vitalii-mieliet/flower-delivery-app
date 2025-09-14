import { Router } from 'express';
import {
  getShopByIdController,
  getShopsController,
} from '../controllers/shops.js';

const router = Router();

router.get('/', getShopsController);
router.get('/:shopId', getShopByIdController);

export default router;
