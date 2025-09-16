import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { NavLink } from 'react-router-dom';

interface CartBadgeProps {
  count: number;
  to?: string;
}

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    padding: '0 4px',
  },
}));

const CartBadge: React.FC<CartBadgeProps> = ({ count, to = '/cart' }) => {
  return (
    <IconButton aria-label="cart" component={NavLink} to={to}>
      <StyledBadge badgeContent={count} color="secondary">
        <ShoppingCartIcon sx={{ color: '#fafafa' }} />
      </StyledBadge>
    </IconButton>
  );
};

export default CartBadge;
