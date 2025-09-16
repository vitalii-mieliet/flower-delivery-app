import { createSelector } from '@reduxjs/toolkit';
import { UserData } from '../../types/users';
import { RootState } from '../store';
import { cartAdapter } from './slice';
import { CartItem, OrderItem } from '../../types/cart';

export const cartSelectors = cartAdapter.getSelectors<RootState>(
  (state) => state.cart,
);

export const selectCartItems = createSelector(
  cartSelectors.selectAll,
  (items: CartItem[]): (CartItem & { rowTotal: number })[] =>
    items.map((item) => ({
      ...item,
      rowTotal: (item.quantity ?? 1) * item.price.amount,
    })),
);

export const selectItemsForOrder = createSelector(
  cartSelectors.selectAll,
  (items): OrderItem[] =>
    items.map((item) => ({
      productId: item._id,
      name: item.name,
      price: item.price.amount,
      quantity: item.quantity ?? 1,
    })),
);

export const selectCartTotal = createSelector(
  cartSelectors.selectAll,
  (items: CartItem[]): number =>
    items.reduce(
      (sum, item) => sum + (item.quantity ?? 1) * item.price.amount,
      0,
    ),
);

export const selectUserData = (state: RootState): UserData =>
  state.cart.userData;
