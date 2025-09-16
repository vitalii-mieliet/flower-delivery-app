import { FC } from 'react';
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { CartItem } from '../types/cart';
import QuantitySelector from './common/QuantitySelector';
import { useAppDispatch } from '../redux/store';
import { cartActions } from '../redux/cart/slice';
import { formatPrice } from '../utils/formatPrice';

interface Props {
  item: CartItem;
}

const CartListItem: FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleRemove = () => dispatch(cartActions.removeCartItem(item._id));
  return (
    <Card
      sx={{
        display: 'flex',
        padding: '16px',
        alignItems: 'center',
        width: '100%',
        height: '136px',
        gap: '32px',
      }}
    >
      <CardMedia
        component="img"
        image={item.imageUrl}
        sx={{
          height: '100%',
          width: 124,
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
          p: 0,
          '&:last-child': {
            paddingBottom: 0,
          },
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">{item.name}</Typography>
          <IconButton aria-label="remove" onClick={handleRemove}>
            <DeleteIcon color="error" />
          </IconButton>
        </Box>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <QuantitySelector
            productId={item._id}
            quantity={item.quantity ?? 1}
          />
          <Box display="flex" gap={0.5} alignItems="end">
            <Typography fontSize={24}>{formatPrice(item.rowTotal)}</Typography>
            <Typography fontSize={20}>{item.price.currency}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CartListItem;
