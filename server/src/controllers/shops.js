import { getShopById, getShops } from '../services/shops.js';

export const getShopsController = async (req, res) => {
  const data = await getShops();

  res.status(200).json({
    status: 200,
    message: 'Successfully found shops!',
    data,
  });
};

export const getShopByIdController = async (req, res) => {
  const { shopId } = req.params;
  const data = await getShopById(shopId);

  res.status(200).json({
    status: 200,
    message: `Successfully found shop witg ID: ${shopId}!`,
    data,
  });
};
