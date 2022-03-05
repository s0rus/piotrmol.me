import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import { Theme } from './assets/styles/Theme';
import Header from './components/Header/Header';
import Hero from './pages/Hero/Hero';
import MainTemplate from './templates/MainTemplate/MainTemplate';

const Root = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Router>
        <MainTemplate>
          <Header />
          <Routes>
            <Route exact path='/' element={<Hero />} />
          </Routes>
        </MainTemplate>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
