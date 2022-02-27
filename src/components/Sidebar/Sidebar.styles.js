import styled from 'styled-components';
import { ReactComponent as UnstyledLogo } from '../../assets/icons/piotr-mol-logo.svg';

export const Wrapper = styled.aside`
  min-width: 100px;
  max-width: 100px;
  margin: 0 16px;

  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: space-between;

  .swiper-scrollbar {
    width: 20px;
    height: 100%;
    margin: 2em 0;

    background-color: ${({ theme }) => theme.colors.blue};

    .swiper-scrollbar-drag {
      background-color: ${({ theme }) => theme.colors.pink};
      border: 2px solid ${({ theme }) => theme.colors.blue};
    }
  }
`;

export const Logo = styled(UnstyledLogo)`
  width: 80%;
  height: auto;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: space-between;
  z-index: 999;

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    svg g path {
      transition: color 0.2s ease-in-out;
    }

    &:hover,
    &:focus {
      svg {
        color: ${({ theme, isLight }) =>
          isLight ? theme.colors.pink : theme.colors.blue};
      }
    }
  }
`;

export const ViewTitle = styled.div`
  margin-top: 8px;
  text-align: justify;
  font-family: 'Playfair Display', serif;
`;

export const SocialIcons = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  a {
    margin: 4px 0;

    svg {
      transition: color 0.2s ease-in-out;
    }

    &:hover,
    &:focus {
      svg {
        color: ${({ theme, isLight }) =>
          isLight ? theme.colors.pink : theme.colors.blue};};
      }
    }
  }
`;
