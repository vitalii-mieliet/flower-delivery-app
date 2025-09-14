import Product from '../db/models/Product.js';

export const getProducts = async (shopId) => {
  const filter = {};
  if (shopId) filter.shopId = shopId;
  const data = await Product.find(filter);
  return data;
};
