import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchShopsForFilter } from './operations';

import {
  FiltersState,
  FilterValues,
  ShopFilterItem,
} from '../../types/filters';

const initialState: FiltersState = {
  values: {
    shopId: null,
  },
  options: {
    shops: [],
  },
  status: 'idle',
  error: null,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilterValues: (state, action: PayloadAction<Partial<FilterValues>>) => {
      Object.assign(state.values, action.payload);
    },
    resetFilterValues: (state) => {
      state.values = { ...initialState.values };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopsForFilter.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(
        fetchShopsForFilter.fulfilled,
        (state, action: PayloadAction<ShopFilterItem[]>) => {
          state.status = 'succeeded';
          state.options.shops = action.payload;
        },
      )
      .addCase(fetchShopsForFilter.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload ?? null;
      });
  },
});

export default filtersSlice.reducer;
export const { setFilterValues, resetFilterValues } = filtersSlice.actions;
