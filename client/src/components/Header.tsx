import { AppBar, Box, Container, List, ListItem, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';
import CartBadge from './common/CartBadge';
import { useAppSelector } from '../redux/store';
import { cartSelectors } from '../redux/cart/selectors';

const Header = () => {
  const cartItems = useAppSelector(cartSelectors.selectAll);
  const countCartItems = cartItems.length;
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          <List sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            <ListItem>
              <NavLink to={'/'}>Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={'/products'}>Catalog</NavLink>
            </ListItem>
          </List>

          {/* Корзина справа */}
          <Box sx={{ position: 'absolute', right: 0 }}>
            <CartBadge count={countCartItems} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
