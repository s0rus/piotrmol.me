import styled from 'styled-components';

export const StyledLetter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  float: left;

  min-width: 6rem;
  min-height: 6rem;

  padding: 1rem 1.8rem;
  margin-right: 0.5rem;
  margin-top: 0.6rem;

  border: 3px solid ${({ theme: { colors } }) => colors.blue};
  font-weight: 900;
  font-size: 2.5rem;

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

    top: 0.4rem;
    left: 0;
  }

  &::after {
    width: 2px;
    height: 100%;

    top: 0;
    left: 0.4rem;
  }
`;
