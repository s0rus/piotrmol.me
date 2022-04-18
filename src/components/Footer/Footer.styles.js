import styled from 'styled-components';
import GrainTexture from '../../assets/textures/grain-alternate.webp';

export const Wrapper = styled.footer`
  width: 100%;
  min-height: 400px;
  background: url(${GrainTexture}) ${({ theme: { colors } }) => colors.blue};
  color: ${({ theme: { colors } }) => colors.pink};
`;

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  align-items: flex-start;
  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    flex-flow: row wrap;
    justify-content: center;
  }
`;

export const Content = styled.div`
  a {
    display: inline-block;
  }

  @media all and (${({ theme: { screenSizes } }) => screenSizes.mobileLarge}) {
    margin-bottom: 1rem;
  }
`;

export const ContentSections = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  width: 100%;
  margin-left: 2rem;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    margin-left: 0;
    margin-top: 2rem;
    text-align: center;
  }

  @media all and (${({ theme: { screenSizes } }) => screenSizes.mobileLarge}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ContentHeader = styled.p`
  font-family: ${({ theme: { fonts } }) => fonts.details};
  font-weight: 700;
  display: block;
`;

export const LinkList = styled.ul`
  li {
    margin: 1rem 0;
    a {
      transition: letter-spacing 0.2s ease-in-out;
      &:hover,
      &:focus {
        letter-spacing: 2px;
      }
    }
  }
`;
