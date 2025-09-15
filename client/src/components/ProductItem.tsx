import { FC } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';
import { Product } from '../types/products';

interface Props {
  product: Product;
}

const ProductItem: FC<Props> = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        image={product.imageUrl}
        sx={{
          width: { xs: '100%', md: 292 },
          height: 350,
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />
      <CardContent>
        <Typography>{product.name}</Typography>
        <Typography>{product.price.amount}</Typography>
        <Typography>{product.price.currency}</Typography>
        <Button type="button">Add to cart</Button>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
