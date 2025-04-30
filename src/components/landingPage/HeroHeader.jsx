import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';

function HeroHeader() {
  return (
    <Box
      component="header"
      sx={{
        height: '75vh',
        backgroundImage: `url('https://img.freepik.com/photos-gratuite/fond-numerique-futuriste-degrade-bleu-fonce_53876-160646.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)', // fallback

      }}
      id='home'
    >
      <Container>
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
          Tech Made Simple.
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Confused by code? Intimidated by tech? You're not alone. This blog breaks down complex topics into fun, easy-to-understand guides—no jargon, no pressure.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4 }}
          href="#contact"
        >
          Write for us
        </Button>
      </Container>
    </Box>
  );
}

export default HeroHeader;
