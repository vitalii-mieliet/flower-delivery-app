import { FC, ChangeEvent } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';

import { FilterValues, ShopFilterItem } from '../types/filters';

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
    >
      {shops.map((shop: ShopFilterItem) => (
        <FormControlLabel
          key={shop._id}
          value={shop._id}
          control={<Radio />}
          label={shop.name}
        />
      ))}
    </RadioGroup>
  );
};

export default ShopList;
