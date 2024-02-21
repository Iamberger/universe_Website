'use client';


import React from 'react';
import { CssBaseline,  ThemeProvider, createTheme } from '@mui/material';
import Navbar from './Navbar';
import Footer from '../components/Footer';
import { makeStyles } from '@mui/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'IRANYekanXFaNum-Bold, Arial, sans-serif', 
  },
});

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {children}
      <body />
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;