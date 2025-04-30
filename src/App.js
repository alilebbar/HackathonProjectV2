import './App.css';
import ResponsiveAppBar from './components/landingPage/ResponsiveAppBar';
import HeroHeader from './components/landingPage/HeroHeader';
import AboutUs from './components/landingPage/AboutUs';
import React from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import BlogPosts from './components/landingPage/BlogPosts';
import Testimonials from './components/landingPage/TestMonial';
import Footer from './components/landingPage/Footer';


function App() {
  return (
    
     <>
     <ResponsiveAppBar />
     <HeroHeader/>
     <AboutUs/>
     <BlogPosts/>
     <Testimonials/>
     <Footer/>
     </>
  );
}



export default App;
