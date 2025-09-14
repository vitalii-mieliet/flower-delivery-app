import { EntityState } from '@reduxjs/toolkit';
import { AsyncState } from '.';

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

export interface ProductsState
  extends EntityState<Product, string>,
    AsyncState {}

export interface FetchProductsResponce {
  data: Product[];
}
