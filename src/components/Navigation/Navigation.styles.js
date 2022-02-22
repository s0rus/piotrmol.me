import styled from 'styled-components';

export const Wrapper = styled.nav`
  min-width: 400px;
  padding: 0 16px;
  position: relative;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;

  div {
    transform: translateY(-5%);

    ul {
      list-style-type: none;
      line-height: 1.2;

      a {
        font-family: 'Playfair Display', serif;
        font-size: clamp(64px, 5vw, 128px);
        font-weight: 900;

        transition: letter-spacing 0.2s ease-in-out;

        &:hover,
        &:active,
        &:focus {
          letter-spacing: 4px;
        }
      }
    }
  }
`;

export const Footer = styled.footer``;
