import { Router } from 'express';

const router = Router();

router.use('/products', (req, res) => {
  res.json('Hello Flower Delivery App');
});

export default router;
