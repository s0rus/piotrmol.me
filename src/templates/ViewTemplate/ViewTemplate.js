import React from 'react';
import { Container, Wrapper } from './ViewTemplate.styles';

// eslint-disable-next-line react/prop-types
const ViewTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export default ViewTemplate;
