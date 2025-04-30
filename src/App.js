import './App.css';
import ResponsiveAppBar from './components/landingPage/ResponsiveAppBar';
import HeroHeader from './components/landingPage/HeroHeader';
import AboutUs from './components/landingPage/AboutUs';
import React, {useState} from 'react';
import { Box, Button, Container, Typography } from '@mui/material';
import BlogPosts from './components/landingPage/BlogPosts';
import Testimonials from './components/landingPage/TestMonial';
import Footer from './components/landingPage/Footer';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem("user"));
  return (
    
     <>
     <ResponsiveAppBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}/>
     <HeroHeader/>
     <AboutUs/>
     <BlogPosts isAuthenticated={isAuthenticated}/>
     <Testimonials/>
     <Footer/>
     </>
  );
}



export default App;
