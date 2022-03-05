import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainTemplate;
