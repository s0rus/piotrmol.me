import React from 'react';
import { Wrapper } from './FancyLink.style';

// eslint-disable-next-line react/prop-types
const FancyLink = ({ children, toggleIsFancy, ...rest }) => {
  return (
    <Wrapper
      {...rest}
      onMouseEnter={() => toggleIsFancy(true)}
      onMouseLeave={() => toggleIsFancy(false)}
    >
      {children}
    </Wrapper>
  );
};

export default FancyLink;
