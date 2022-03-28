import styled from 'styled-components';

export const HeroWrapper = styled.section`
  width: 100%;
  padding-top: 4rem;

  display: flex;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    flex-flow: column nowrap;
    padding-top: 0;
  }
`;

export const LeftHeroContainer = styled.div`
  max-width: 600px;
`;

export const RightHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.medium}) {
    justify-content: flex-end;
  }
`;

export const ExternalLinks = styled.div`
  text-align: right;
  align-self: flex-end;

  margin-left: 1rem;

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

  @media all and (${({ theme: { screenSizes } }) => screenSizes.medium}) {
    display: none;
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

  @media all and (${({ theme: { screenSizes } }) => screenSizes.large}) {
    margin-left: 2rem;
  }

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    width: 100%;
    margin-left: 0;
    margin-top: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const AboutWrapper = styled.section`
  margin-top: 4rem;
`;

export const AboutContainer = styled.div`
  padding-left: 2rem;

  border-left: 3px solid ${({ theme: { colors } }) => colors.blue};

  position: relative;
  &::before,
  &::after {
    background-color: currentColor;

    content: '';
    position: absolute;
  }

  &::before {
    width: 2rem;
    height: 2rem;

    top: -2rem;
    left: -0.75rem;
  }

  &::after {
    width: 2px;
    height: 100%;

    top: 0;
    left: 0.4rem;
  }

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    border-left: none;
    padding-left: 0;

    &::before,
    &::after {
      display: none;
    }
  }
`;

export const AboutContentTitleWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  max-width: 80ch;
  margin-bottom: 2rem;
`;

export const InterestsWrapper = styled.div`
  margin: 0;

  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  max-width: 80ch;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    flex-flow: column nowrap;
    max-width: 100%;
  }
`;

export const InterestContent = styled.div`
  padding: 2rem;

  display: flex;
  flex-flow: column nowrap;
  flex: 1;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    margin-top: 12rem;
    padding-right: 0;
  }

  strong {
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
  }

  p {
    margin: 0.2rem 0;
  }

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    padding: 1rem 0;

    &:first-child,
    &:last-child {
      padding-left: 0;
      margin-top: 1rem;
    }
  }
`;

export const InterestGraphic = styled.div`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  padding-bottom: 5rem;

  background-color: ${({ theme: { colors } }) => colors.blue};

  font-size: 4em;
  font-weight: bold;
  color: ${({ theme: { colors } }) => colors.white};
  font-family: ${({ theme: { fonts } }) => fonts.details};
  line-height: 1;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  flex-flow: column nowrap;
  text-align: right;

  span {
    display: block;
  }

  position: relative;
  &::before,
  &::after {
    background-color: ${({ theme: { colors } }) => colors.pink};

    content: '';
    position: absolute;
  }

  &::before {
    width: 100%;
    height: 2px;

    top: calc(100% - 0.8rem);
    left: 0;
  }

  &::after {
    width: 2px;
    height: 100%;

    top: 0;
    left: 0.8rem;
  }
`;

export const InterestsFooter = styled.div`
  max-width: 80ch;
  padding-bottom: 4rem;
  margin: 0;

  strong {
    font-size: 1.25rem;
    padding-bottom: 0.5rem;
  }

  p {
    margin: 0.2rem 0;
  }

  ${InterestContent} {
    padding-top: 0;
    margin-top: 0;
  }

  ${InterestGraphic} {
    padding-bottom: 5rem;
  }
`;
