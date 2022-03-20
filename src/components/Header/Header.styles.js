import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.header`
  width: 100%;
  padding: 2rem 2.5rem;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    padding: 1rem;
  }
`;

export const Container = styled.div`
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 0.2rem;

  svg {
    width: 3rem;
    height: auto;
    margin-right: 0.5rem;

    align-self: flex-end;
  }
`;

export const PiotrMolInfo = styled.div`
  line-height: 0.9;

  h1 {
    display: flex;
    flex-flow: column nowrap;
  }
`;

export const Name = styled.span`
  font-size: 2.2rem;
`;

export const PageHeadline = styled.span`
  font-size: 0.9rem;
  font-weight: normal;
`;

export const Navigation = styled.nav`
  font-size: 1.2rem;

  ul {
    li {
      display: inline-block;
    }

    li:first-child {
      margin: 0 0.5rem 0 1rem;
    }

    li:last-child {
      margin: 0 0 0 0.5rem;
    }
  }
`;

export const NavLink = styled(Link)`
  font-weight: 700;

  transition: letter-spacing 0.2s ease-in-out;
  &:hover,
  &:focus {
    letter-spacing: 2px;
  }
`;
