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
import { Theme } from '../../assets/styles/Theme';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();

  const getHeaderTitle = () => {
    switch (pathname) {
      case '/works':
        return Theme.headerTitles.works;
      default:
        return Theme.headerTitles.hero;
    }
  };

  return (
    <Wrapper>
      <Container>
        <Logo to='/'>
          <PiotrMolLogo />
          <PiotrMolInfo>
            <h1>
              <Name>Piotr Mól</Name>
              <PageHeadline>{getHeaderTitle()}</PageHeadline>
            </h1>
          </PiotrMolInfo>
        </Logo>
        <Navigation>
          <ul>
            <li>
              <NavLink to='/works'>works</NavLink>
            </li>
            <li>
              <span>—</span>
            </li>
            <li>
              <NavLink to='/contact'>contact</NavLink>
            </li>
          </ul>
        </Navigation>
      </Container>
    </Wrapper>
  );
};

export default Header;
