import { RootState } from '../store';

export const selectFilterValues = (state: RootState) => state.filters.values;
export const selectFilterOptions = (state: RootState) => state.filters.options;
export const selectFiltersStatus = (state: RootState) => state.products.status;
export const selectFiltersError = (state: RootState) => state.products.error;
