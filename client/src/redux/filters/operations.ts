import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/api';
import { ShopFilterItem } from '../../types/filters';
import { ShopsApiResponse } from '../../types/shops';

export const fetchShopsForFilter = createAsyncThunk<
  ShopFilterItem[],
  void,
  { rejectValue: string }
>('filters/fetchShops', async (_, { rejectWithValue }) => {
  try {
    const { data } = await api.get<ShopsApiResponse>('/shops');
    const shops = data.data;
    const shopsForFilter = shops.map((shop) => ({
      _id: shop._id,
      name: shop.name,
      logoUrl: shop.logoUrl,
    }));
    return shopsForFilter;
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return rejectWithValue(message);
  }
});
