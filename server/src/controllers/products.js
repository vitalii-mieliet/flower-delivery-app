import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';
import { getProducts } from '../services/products.js';

export const getProductsController = async (req, res) => {
  const { shopId } = req.query;

  if (shopId && !isValidObjectId(shopId)) {
    throw createHttpError(400, `Shop ID: "${shopId}" is not valid!`);
  }

  const data = await getProducts(shopId);

  res.status(200).json({
    status: 200,
    message: 'Successfully found products!',
    data,
  });
};
