import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/api';
import { FetchProductsResponce, Product } from '../../types/products';
import { FilterValues } from '../../types/filters';

export const fetchProductsByQuery = createAsyncThunk<
  Product[],
  FilterValues,
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
