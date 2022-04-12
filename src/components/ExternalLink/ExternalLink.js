import styled from 'styled-components';

export const ExternalLink = styled.a`
  font-weight: 700;
  font-family: ${({ theme: { fonts } }) => fonts.details};

  transition: letter-spacing 0.2s ease-in-out;
  &:hover,
  &:focus {
    letter-spacing: 2px;
  }
`;
