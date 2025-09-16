import { Grid2, Stack } from '@mui/material';
import { FC } from 'react';

import CartListItem from './CartListItem';
import { CartItem } from '../types/cart';

interface Props {
  items: CartItem[];
}

const CartList: FC<Props> = ({ items }) => {
  return (
    <Stack
      component="ul"
      spacing={1}
      height="70vh"
      overflow="auto"
      paddingInline={4}
    >
      {items.map((item: CartItem) => (
        <Grid2 key={item._id} component="li" size={12}>
          <CartListItem item={item} />
        </Grid2>
      ))}
    </Stack>
  );
};

export default CartList;
