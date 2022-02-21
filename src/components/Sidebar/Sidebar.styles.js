import styled from 'styled-components';
import { ReactComponent as UnstyledLogo } from '../../assets/icons/piotr-mol-logo.svg';

export const Wrapper = styled.aside`
  min-width: 100px;
  margin: 0 16px;

  display: flex;
  align-items: center;
  flex-flow: column nowrap;
  justify-content: space-between;
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

    svg {
      transition: transform 0.2s ease-in-out;
    }

    &:hover,
    &:focus {
      svg {
        transform: scale(0.8);
      }
    }
  }
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
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
`;
