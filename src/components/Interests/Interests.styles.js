import styled from 'styled-components';

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
  color: ${({ theme: { colors } }) => colors.pink};
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
