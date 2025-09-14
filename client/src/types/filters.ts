import { AsyncState } from '.';

export interface ShopFilterItem {
  _id: string;
  name: string;
  logoUrl?: string;
}

export interface FilterValues {
  shopId: string | null;
}

export interface FilterOptions {
  shops: ShopFilterItem[];
}

export interface FiltersState extends AsyncState {
  values: FilterValues;
  options: FilterOptions;
}
