import styled from 'styled-components';

export const BigContentTitle = styled.h2`
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xxl};
  line-height: 1.3;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.medium}) {
    font-size: 25vmin;
  }
  /* 
  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    font-size: 10vmin;
  } */
`;
