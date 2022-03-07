import styled from 'styled-components';
import GrainTexture from '../../assets/textures/grain-alternate.webp';

export const HeroWrapper = styled.section`
  width: 100%;

  display: flex;
`;

export const LeftHeroContainer = styled.div`
  max-width: 600px;
`;

export const RightHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const ExternalLinks = styled.div`
  text-align: right;
  align-self: flex-end;

  p {
    font-family: ${({ theme: { fonts } }) => fonts.details};
  }

  ul {
    li {
      a {
        font-weight: 700;

        transition: letter-spacing 0.2s ease-in-out;
        &:hover,
        &:focus {
          letter-spacing: 2px;
        }
      }
    }
  }
`;

export const HeroGraphic = styled.div`
  height: 300px;
  padding: 2rem;
  margin-left: 4rem;

  background-color: ${({ theme: { colors } }) => colors.blue};

  font-size: 4em;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fonts } }) => fonts.details};
`;

export const AboutWrapper = styled.section`
  margin-top: 8rem;

  /* background: url(${GrainTexture}) ${({ theme: { colors } }) =>
    colors.darkPink}; */
`;

export const AboutContainer = styled.div`
  padding-right: 2rem;

  border-top: 3px solid ${({ theme: { colors } }) => colors.blue};
  border-right: 3px solid ${({ theme: { colors } }) => colors.blue};

  position: relative;
  &::before,
  &::after {
    background-color: currentColor;

    content: '';
    position: absolute;
  }

  &::before {
    width: 100%;
    height: 2px;

    top: 0.8rem;
    left: 0;
  }

  &::after {
    width: 2px;
    height: 100%;

    top: 0;
    left: calc(100% - 0.8rem);
  }
`;

export const AboutContentTitleWrapper = styled.div`
  padding: 0 4rem 4rem 0rem;
`;

export const InterestsWrapper = styled.div`
  padding-bottom: 10rem;
  margin: 0;

  display: flex;
  justify-content: flex-end;

  max-width: 80ch;

  div {
    padding: 2rem;

    &:first-child {
      padding-left: 0;
    }

    &:last-child {
      margin-top: 10rem;
      padding-right: 0;
    }
  }
`;
