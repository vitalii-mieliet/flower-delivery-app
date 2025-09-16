import { FC } from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

import { ShopFilterItem } from '../types/filters';

interface Props {
  shop: ShopFilterItem;
}

const ShopFilterItemCard: FC<Props> = ({ shop }) => {
  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <CardMedia
        component="img"
        image={shop.logoUrl}
        sx={{
          width: 60,
          height: 60,
          objectFit: 'cover',
          flexShrink: 0,
        }}
      />
      <CardContent sx={{ flex: 1, p: 0, '&:last-child': { pb: 0 } }}>
        <Typography>{shop.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default ShopFilterItemCard;
