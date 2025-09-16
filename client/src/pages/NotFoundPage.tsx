import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.default"
    >
      <Typography variant="h3" color="text.primary" gutterBottom>
        404 — Not Found
      </Typography>
      <Typography variant="body1" color="text.secondary" gutterBottom>
        The page you are looking for doesn’t exist.
      </Typography>
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          color="primary"
          startIcon={<HomeIcon />}
          component={RouterLink}
          to="/"
        >
          Go to homepage
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<ArrowBackIcon />}
          onClick={handleGoBack}
        >
          Go back
        </Button>
      </Stack>
    </Box>
  );
};

export default NotFoundPage;
