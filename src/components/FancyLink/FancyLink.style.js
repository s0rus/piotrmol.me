import styled from 'styled-components';

export const Wrapper = styled.a`
  font-weight: 700;

  transition: letter-spacing 0.2s ease-in-out;
  &:hover,
  &:focus {
    letter-spacing: 2px;
  }
`;
