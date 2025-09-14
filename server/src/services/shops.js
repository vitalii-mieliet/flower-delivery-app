import Shop from '../db/models/Shop.js';

export const getShops = async () => {
  const data = await Shop.find();
  return data;
};

export const getShopById = async (shopId) => {
  const data = await Shop.findById(shopId);
  return data;
};
