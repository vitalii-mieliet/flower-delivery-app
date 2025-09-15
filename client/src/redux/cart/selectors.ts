import { createSelector } from '@reduxjs/toolkit';
import { UserData } from '../../types/users';
import { RootState } from '../store';
import { cartAdapter } from './slice';
import { CartItem } from '../../types/cart';

export const cartSelectors = cartAdapter.getSelectors<RootState>(
  (state) => state.cart,
);

export const slectCartItems = createSelector(
  cartSelectors.selectAll,
  (items: CartItem[]): (CartItem & { rowTotal: number })[] =>
    items.map((item) => ({
      ...item,
      rowTotal: item.quantity * item.price.amount,
    })),
);

export const selectCartTotal = createSelector(
  cartSelectors.selectAll,
  (items: CartItem[]): number =>
    items.reduce((sum, item) => sum + item.quantity * item.price.amount, 0),
);

export const selectUserData = (state: RootState): UserData =>
  state.cart.userData;
