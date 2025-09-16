import HomeImage from '../assets/images/background.jpg';
// import HomeImage2x from '@/assets/images/hero-2x.jpg';
import { Box, Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <Box
      component="section"
      sx={{
        backgroundImage: `
      url(${HomeImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: 'calc(100vh - 64px)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container disableGutters>
        <Box
          color="Background"
          sx={{
            textAlign: 'left',
            backgroundColor: 'rgba(56, 45, 148, 0.6)',
            padding: '24px',
            display: 'inline-block',
            borderRadius: '10px',
          }}
        >
          <Typography variant="h1" component="h1" mb={2}>
            Bouquets for Every Occasion
          </Typography>
          <Typography variant="subtitle1" component="p" mb={5}>
            Discover fresh flowers and gifts in our catalog
          </Typography>
          <Button variant="contained" component={Link} to="/products">
            Browse Bouquets
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HomePage;
