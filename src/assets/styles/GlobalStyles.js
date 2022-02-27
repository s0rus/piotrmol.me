import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html {
    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.darkGrey};


    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
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

  a, button, input, textarea {
    font-family: inherit;
    font-size: inherit;
    text-decoration: none;
    color: inherit;
  }

`;
