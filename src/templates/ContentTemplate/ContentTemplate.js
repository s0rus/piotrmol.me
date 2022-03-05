import React from 'react';
import PropTypes from 'prop-types';
import { Container, Wrapper } from './ContentTemplate.styles';

const ContentTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

ContentTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ContentTemplate;
