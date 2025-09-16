import { FC } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Product } from '../types/products';
import { useAppDispatch } from '../redux/store';
import { cartActions } from '../redux/cart/slice';
import { CartItem } from '../types/cart';
import { formatPrice } from '../utils/formatPrice';
import { toast } from 'react-toastify';

interface Props {
  product: Product;
}

const ProductItem: FC<Props> = ({ product }) => {
  const { _id, name, price, shopId, imageUrl } = product;
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    dispatch(
      cartActions.addCartItem({
        _id,
        name,
        price,
        shopId,
        imageUrl,
        quantity: 1,
        rowTotal: price.amount,
      } as CartItem),
    );
    toast.success('Product successfully added to your cart!');
  };

  return (
    <Card>
      <CardMedia
        component="img"
        image={product.imageUrl}
        sx={{
          width: '100%',
          height: 300,
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />
      <CardContent>
        <Typography variant="h6" mb={2}>
          {product.name}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="end" gap={0.5}>
            <Typography color="info" fontSize={20} fontWeight={600}>
              {formatPrice(product.price.amount)}
            </Typography>
            <Typography color="primary" fontSize={18} fontWeight={700}>
              {product.price.currency}
            </Typography>
          </Box>
          <Button variant="contained" type="button" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
