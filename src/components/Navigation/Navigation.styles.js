import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.nav`
  min-width: 400px;
  padding: 0 16px;
  position: relative;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  div {
    transform: translateY(-5%);

    ul {
      list-style-type: none;
      line-height: 1.2;
    }
  }
`;

export const SLink = styled(Link)`
  font-family: 'Playfair Display', serif;
  font-size: clamp(64px, 5vw, 128px);
  font-weight: 900;

  color: ${({ theme: { colors }, currentpathname, to: linkPath }) => {
    if (currentpathname === linkPath) {
      return currentpathname === '/contact' ? colors.blue : colors.pink;
    } else {
      return colors.white;
    }
  }};

  transition: letter-spacing 0.2s ease-in-out;
  &:hover {
    letter-spacing: 4px;
  }
`;

export const Footer = styled.footer``;
