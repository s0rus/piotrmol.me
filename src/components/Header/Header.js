import React from 'react';
import {
  Container,
  Logo,
  Name,
  Navigation,
  NavLink,
  PageHeadline,
  PiotrMolInfo,
  PiotrMolLogo,
  Wrapper,
} from './Header.styles';

const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Logo to='/'>
          <PiotrMolLogo />
          <PiotrMolInfo>
            <h1>
              <Name>Piotr Mól</Name>
              <PageHeadline>me, myself and I...</PageHeadline>
            </h1>
          </PiotrMolInfo>
        </Logo>
        <Navigation>
          <ul>
            <li>
              <NavLink to='/works'>Works</NavLink>
            </li>
            <li>
              <span>—</span>
            </li>
            <li>
              <NavLink to='/contact'>Contact</NavLink>
            </li>
          </ul>
        </Navigation>
      </Container>
    </Wrapper>
  );
};

export default Header;
