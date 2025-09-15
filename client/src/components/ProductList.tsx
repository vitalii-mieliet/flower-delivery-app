import { FC } from 'react';
import { Grid2 } from '@mui/material';

import { Product } from '../types/products';
import ProductItem from './ProductItem';

interface Props {
  products: Product[];
}
const ProductList: FC<Props> = ({ products }) => {
  return (
    <Grid2 component="ul" container spacing={2}>
      {products.map((product: Product) => (
        <Grid2 key={product._id} component="li" size={4}>
          <ProductItem product={product} />
        </Grid2>
      ))}
    </Grid2>
  );
};

export default ProductList;
