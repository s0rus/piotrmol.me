import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Wrapper } from './Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <div>
        <ul>
          <li>
            <Link to='/works'>works</Link>
          </li>
          <li>
            <Link to='/contact'>contact</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
        </ul>
      </div>
      <Footer>piotrmól &copy; 2022</Footer>
    </Wrapper>
  );
};

export default Navigation;
