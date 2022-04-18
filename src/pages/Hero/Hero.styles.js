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

export const SkillsWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding-bottom: 5rem;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    flex-flow: column nowrap;
  }
`;

export const LeftSkillsContainer = styled.div`
  flex: 1;

  & > strong {
    display: block;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.huge};
    padding-bottom: 0.5rem;
  }
`;

export const RightSkillsContainer = styled.div`
  flex: 1;
  margin-top: 8rem;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    margin-top: 2rem;
  }

  & > strong {
    display: block;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.huge};
    line-height: 1;
  }
`;
