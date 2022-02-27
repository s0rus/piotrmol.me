import styled from 'styled-components';
import Logo from '../../assets/icons/piotr-mol-logo.svg';

export const HeaderWrapper = styled.header`
  width: 100%;

  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.pink};
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    line-height: 1;
    font-size: clamp(64px, 5vw, 68px);

    color: ${({ theme }) => theme.colors.blue};
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${({ theme }) => theme.colors.blue};

    span {
      color: ${({ theme }) => theme.colors.green};
      -webkit-text-fill-color: ${({ theme }) => theme.colors.green};
      -webkit-text-stroke-width: 1px;
      -webkit-text-stroke-color: ${({ theme }) => theme.colors.green};
    }
  }
`;

export const AboutContent = styled.div`
  padding: 32px 64px;

  display: flex;
  flex-flow: column nowrap;
`;

export const ContentSection = styled.div`
  margin-bottom: 16px;

  h3 {
    font-size: clamp(48px, 5vw, 54px);
    font-family: 'Playfair Display', serif;
  }

  p {
    margin-top: 8px;
    font-size: clamp(16px, 1vw, 24px);
  }

  span {
    color: ${({ theme }) => theme.colors.pink};
    font-family: 'Playfair Display', serif;
    font-weight: 900;
  }
`;

export const LogoBar = styled.div`
  width: 100%;
  padding: 16px;
  background: url(${Logo});
`;
