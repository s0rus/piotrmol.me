import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html {
    width: 100%;
    height: 100vh;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: ${({ theme: { fonts } }) => fonts.main};
    font-size: 20px;
    line-height: 1.45;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.blue};

    overflow-x: hidden;


    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    @media all and (${({ theme: { screenSizes } }) => screenSizes.large}) {
      font-size: 18px;
    }

    @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
      font-size: 16px;
    }

    
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  *:focus {
    outline: 2px dashed ${({ theme: { colors } }) => colors.green} !important;
  }

  ::selection {
    background-color: ${({ theme: { colors } }) => colors.green};
    color: ${({ theme: { colors } }) => colors.darkPink};
    opacity: 0.9;
  }

  ::-webkit-scrollbar {
    width: 10px; 
    height: 10px; 
  }
  ::-webkit-scrollbar-thumb { 
    background: ${({ theme: { colors } }) => colors.blue};
  }
  ::-webkit-scrollbar-track { 
    background: ${({ theme: { colors } }) => colors.pink};
  }

  body {
    width: inherit;
    height: inherit;
    font-family: inherit;

    #root {
      width: inherit;
      height: inherit;
    }
  }

  a, button, input, textarea, ul, li {
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
    color: inherit;
  }

  strong {
    font-weight: 900;
  }
  
  small {
    font-weight: 700;
    font-size: 0.8rem;
  }

  ul {
    list-style-type: none;
  }

`;
