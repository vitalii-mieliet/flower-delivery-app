import React, { FC } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useAppDispatch } from '../../redux/store';
import { cartActions } from '../../redux/cart/slice';

interface Props {
  productId: string;
  quantity: number;
  min?: number;
  max?: number;
}

const QuantitySelector: FC<Props> = ({
  productId,
  quantity,
  min = 1,
  max = 99,
}) => {
  const dispatch = useAppDispatch();

  const handleDecrease = () => {
    const newQty = Math.max(quantity - 1, min);
    dispatch(
      cartActions.updateCartItem({
        id: productId,
        changes: { quantity: newQty },
      }),
    );
  };

  const handleIncrease = () => {
    const newQty = Math.min(quantity + 1, max);
    dispatch(
      cartActions.updateCartItem({
        id: productId,
        changes: { quantity: newQty },
      }),
    );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = Number(event.target.value);
    if (isNaN(value)) value = min; // если введено не число
    value = Math.max(min, Math.min(max, value)); // ограничиваем min/max
    dispatch(
      cartActions.updateCartItem({
        id: productId,
        changes: { quantity: value },
      }),
    );
  };

  return (
    <Box>
      <IconButton size="small" onClick={handleDecrease}>
        <Remove />
      </IconButton>
      <TextField
        sx={{
          width: 60,
          '& input': {
            textAlign: 'center',
            MozAppearance: 'textfield',
            '&::-webkit-outer-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
            '&::-webkit-inner-spin-button': {
              WebkitAppearance: 'none',
              margin: 0,
            },
          },
        }}
        size="small"
        value={quantity}
        onChange={handleInputChange}
        slotProps={{
          input: {
            inputProps: { min, max, type: 'number' },
          },
        }}
      />
      <IconButton size="small" onClick={handleIncrease}>
        <Add />
      </IconButton>
    </Box>
  );
};

export default QuantitySelector;
