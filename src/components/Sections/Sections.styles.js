import styled from 'styled-components';

export const SectionWrapper = styled.section`
  margin-top: 4rem;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    margin-top: 1rem;
  }
`;

export const SectionContent = styled.div`
  padding: ${({ isInverted }) =>
    isInverted ? '0 1rem 0 4rem' : '0 1rem 0 calc(4rem - 3px)'};

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
