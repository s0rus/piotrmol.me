import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 2.5rem;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    padding: 0 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
`;
