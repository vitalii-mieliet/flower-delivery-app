import {
  createEntityAdapter,
  createSlice,
  EntityState,
} from '@reduxjs/toolkit';
import { fetchProductsByQuery } from './operations';
import { AsyncState } from '../../types';

const productsAdapter = createEntityAdapter<Product, string>({
  selectId: (product) => product._id,
});

const initialState: ProductsState = productsAdapter.getInitialState({
  status: 'idle',
  error: null,
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsByQuery.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsByQuery.fulfilled, (state, action) => {
        state.status = 'succeeded';
        productsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchProductsByQuery.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? null;
      });
  },
});

// Types
export interface ProductPrice {
  amount: number;
  currency: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  shopId: string;
  price: ProductPrice;
}

interface ProductsState extends EntityState<Product, string>, AsyncState {}

export default productsSlice.reducer;
export { productsAdapter };
