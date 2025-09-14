import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchProductsByQuery } from './operations';

import { Product, ProductsState } from '../../types/products';

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

export default productsSlice.reducer;
export { productsAdapter };
