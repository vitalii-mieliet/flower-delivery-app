import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/api';
import { Product } from './slice';

interface FetchProductsResponce {
  data: Product[];
}

interface FetchProductsFilter {
  shopId: string;
}

export const fetchProductsByQuery = createAsyncThunk<
  Product[],
  FetchProductsFilter,
  { rejectValue: string }
>('products/fetch', async (params, { rejectWithValue }) => {
  try {
    const { data } = await api.get<FetchProductsResponce>('/products', {
      params,
    });

    return data.data;
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error';
    return rejectWithValue(message);
  }
});
