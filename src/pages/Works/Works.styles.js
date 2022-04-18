import styled from 'styled-components';
import GrainTexture from '../../assets/textures/grain-alternate.webp';

export const WorksHeader = styled.section`
  display: flex;
  justify-content: flex-end;

  padding-top: 4rem;
`;

export const WorksContent = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  /* max-width: 80ch; */

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    margin-top: 0;
    flex-flow: column nowrap;
  }

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    padding-bottom: 4rem;
  }
`;

export const WorkTitle = styled.h3`
  width: 100%;

  font-size: ${({ theme: { fontSizes } }) => fontSizes.huge};
  font-family: ${({ theme: { fonts } }) => fonts.details};
  text-align: ${({ isInverted }) => (isInverted ? 'right' : 'left')};

  a {
    display: inline-flex;
    align-items: center;
    padding-left: 0.5rem;
  }

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    text-align: left;
  }
`;

export const WorkWrapper = styled.div`
  max-width: 40ch;
  padding: 1rem 1rem 1.5rem 1rem;

  background: url(${GrainTexture}) ${({ theme: { colors } }) => colors.blue};
  color: ${({ theme: { colors } }) => colors.pink};

  margin: ${({ isInverted }) => (isInverted ? '4rem 0 0 2rem' : '0')};

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    margin: 1rem 0 0 0;
    max-width: 100%;

    align-self: center;
    width: 100%;
  }
`;

export const WorkDescription = styled.div`
  margin-top: 1rem;
  padding-left: 0.5rem;
`;

export const WorkStack = styled.div`
  margin-top: 1rem;
  padding-left: 0.5rem;

  h4 {
    font-family: ${({ theme: { fonts } }) => fonts.details};
    font-weight: normal;
  }
`;

export const WorkStackList = styled.ul`
  padding-left: 2rem;
  list-style-type: square;
`;
