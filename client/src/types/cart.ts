import { EntityState } from '@reduxjs/toolkit';
import { Product } from './products';
import { UserData } from './users';

export interface CartItem
  extends Pick<Product, '_id' | 'name' | 'price' | 'shopId' | 'imageUrl'> {
  quantity: number | 1;
  rowTotal: number | 0;
}
export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export interface CartState extends EntityState<CartItem, string> {
  userData: UserData;
}
