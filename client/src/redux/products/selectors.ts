import { RootState } from '../store';
import { productsAdapter } from './slice';

const productsSelectors = productsAdapter.getSelectors<RootState>(
  (state) => state.products,
);

export const selectProducts = (state: RootState) =>
  productsSelectors.selectAll(state);

export const selectStatus = (state: RootState) => state.products.status;
export const selectError = (state: RootState) => state.products.error;
