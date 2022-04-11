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

export const SectionWrapper = styled.section`
  margin-top: 4rem;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    margin-top: 1rem;
  }
`;

export const SectionContent = styled.div`
  padding: ${({ isInverted }) => (isInverted ? '0 2rem 0 0' : '0 0 0 2rem')};

  border-left: ${({ isInverted, theme: { colors } }) =>
    !isInverted && `3px solid ${colors.blue}`};

  border-right: ${({ isInverted, theme: { colors } }) =>
    isInverted && `3px solid ${colors.blue}`};

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
    left: ${({ isInverted }) =>
      isInverted ? 'calc(100% - 1.2rem)' : '-0.75rem'};
  }

  &::after {
    width: 2px;
    height: 100%;

    top: 0;
    left: ${({ isInverted }) =>
      isInverted ? 'calc(100% - 0.4rem)' : '0.4rem'};
  }

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    border: none;
    padding: 0;

    &::before,
    &::after {
      display: none;
    }
  }
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
      margin-top: 0;
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

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    flex-flow: row nowrap;
    padding-bottom: 0;
    padding: 1rem 1rem 2rem 1rem;
    justify-content: flex-end;

    font-size: ${({ theme: { fontSizes } }) => fontSizes.huge};
    overflow: hidden;
  }

  @media all and (${({ theme: { screenSizes } }) => screenSizes.mobileMedium}) {
    font-size: ${({ theme: { fontSizes } }) => fontSizes.large};
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

    @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
      padding: 1rem 1rem 2rem 1rem;
    }
  }

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    padding: 1rem 0;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 5rem;

  strong {
    display: block;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.huge};
    padding-bottom: 0.5rem;
  }

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    flex-flow: column nowrap;
  }
`;

export const LeftSkillsContainer = styled.div`
  flex: 1;
`;

export const RightSkillsContainer = styled.div`
  flex: 1;
  margin-top: 8rem;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    margin-top: 2rem;
  }
`;
