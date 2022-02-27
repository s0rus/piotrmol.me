import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Wrapper } from './ViewTemplate.styles';

// eslint-disable-next-line react/prop-types
const ViewTemplate = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <Wrapper currentPathname={pathname}>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default ViewTemplate;
