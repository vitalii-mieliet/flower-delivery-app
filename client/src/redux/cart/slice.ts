import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { CartItem, CartState } from '../../types/cart';
import { UserData } from '../../types/users';

export const cartAdapter = createEntityAdapter<CartItem, string>({
  selectId: (item: CartItem) => item._id,
});

const initialState: CartState = cartAdapter.getInitialState({
  userData: { name: '', email: '', phone: '', address: '' },
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addUserData: (state, action: PayloadAction<Partial<UserData>>) => {
      Object.assign(state.userData, action.payload);
    },
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      cartAdapter.addOne(state, action);
    },

    removeCartItem: (state, action: PayloadAction<string>) => {
      cartAdapter.removeOne(state, action);
    },
    updateCartItem: (
      state,
      action: PayloadAction<{ id: string; changes: Partial<CartItem> }>,
    ) => {
      cartAdapter.updateOne(state, action);
    },
    clearCart: cartAdapter.removeAll,
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
