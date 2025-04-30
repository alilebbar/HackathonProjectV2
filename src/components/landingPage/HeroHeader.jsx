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
          Bienvenue sur notre site
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Nous construisons des solutions innovantes pour l'avenir.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4 }}
          href="#contact"
        >
          Nous contacter
        </Button>
      </Container>
    </Box>
  );
}

export default HeroHeader;
