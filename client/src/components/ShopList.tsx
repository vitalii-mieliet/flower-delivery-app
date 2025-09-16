import { FC, ChangeEvent } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

import { FilterValues, ShopFilterItem } from '../types/filters';
import ShopFilterItemCard from './ShopFilterItemCard';

interface Props {
  shops: ShopFilterItem[];
  selectedShopId?: string | null;
  onChange: (shopId: Partial<FilterValues>) => void;
}

const ShopList: FC<Props> = ({ shops, selectedShopId, onChange }) => {
  return (
    <RadioGroup
      value={selectedShopId}
      onChange={(e: ChangeEvent<HTMLInputElement>) =>
        onChange({ shopId: e.target.value })
      }
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      {shops.map((shop: ShopFilterItem) => (
        <FormControlLabel
          key={shop._id}
          value={shop._id}
          control={<Radio sx={{ display: 'none' }} />}
          label={<ShopFilterItemCard shop={shop} />}
          sx={{
            margin: 0,
            width: '100%',
            '& .MuiFormControlLabel-label': {
              width: '100%', // вот это растягивает внутренний span
              display: 'flex', // чтобы карточка занимала всю ширину
            },
          }}
        />
      ))}
    </RadioGroup>
  );
};

export default ShopList;
