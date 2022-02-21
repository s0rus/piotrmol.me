import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SwiperCore, { Scrollbar } from 'swiper/core';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import { Theme } from './assets/styles/Theme';
import Navigation from './components/Navigation/Navigation';
import ViewTemplate from './templates/ViewTemplate/ViewTemplate';
import Hero from './views/Hero/Hero';
import Works from './views/Works/Works';
import Contact from './views/Contact/Contact';
import About from './views/About/About';

SwiperCore.use([Scrollbar]);

const Root = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <ViewTemplate>
        <Router>
          <Routes>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/works' element={<Works />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/about' element={<About />} />
          </Routes>
          <Navigation />
        </Router>
      </ViewTemplate>
    </ThemeProvider>
  );
};

export default Root;
