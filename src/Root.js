import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import { Theme } from './assets/styles/Theme';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './pages/Hero/Hero';
import Works from './pages/Works/Works';
import MainTemplate from './templates/MainTemplate/MainTemplate';

const Root = () => {
  return (
    <ThemeProvider theme={Theme}>
      <HelmetProvider>
        <GlobalStyles />
        <Router>
          <MainTemplate>
            <Header />
            <Routes>
              <Route exact path='/' element={<Hero />} />
              <Route exact path='/works' element={<Works />} />
            </Routes>
            <Footer />
          </MainTemplate>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default Root;
