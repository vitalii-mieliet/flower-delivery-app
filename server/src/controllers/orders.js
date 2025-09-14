import { createOrder } from '../services/orders.js';

export const createOrderController = async (req, res) => {
  const data = await createOrder(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a order!`,
    data,
  });
};
