import React from 'react';
import { useLocation } from 'react-router-dom';
import { Footer, SLink, Wrapper } from './Navigation.styles';

const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <div>
        <ul>
          <li>
            <SLink to='/works' currentpathname={pathname}>
              works
            </SLink>
          </li>
          <li>
            <SLink to='/contact' currentpathname={pathname}>
              contact
            </SLink>
          </li>
          <li>
            <SLink to='/about' currentpathname={pathname}>
              about
            </SLink>
          </li>
        </ul>
      </div>
      <Footer>piotrmól &copy; 2022</Footer>
    </Wrapper>
  );
};

export default Navigation;
