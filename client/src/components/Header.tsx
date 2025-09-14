import { AppBar, Box, List, ListItem, Toolbar } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Box component={'nav'} aria-label="Main navigation">
          <List sx={{ display: 'flex', flexDirection: 'row' }}>
            <ListItem>
              <NavLink to={'/'}>Home</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={'/products'}>Catalog</NavLink>
            </ListItem>
            <ListItem>
              <NavLink to={'/cart'}>Cart</NavLink>
            </ListItem>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
