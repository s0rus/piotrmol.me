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
        font-size: clamp(64px, 5vw, 128px);
        font-weight: 700;
      }
    }
  }
`;

export const Footer = styled.footer``;
