import styled from 'styled-components';
import GrainTexture from '../../assets/textures/grain-alternate.webp';

export const Wrapper = styled.footer`
  width: 100%;

  min-height: 400px;

  background: url(${GrainTexture}) ${({ theme: { colors } }) => colors.blue};
  color: ${({ theme: { colors } }) => colors.pink};
`;

export const Container = styled.div`
  padding: 2rem 0;

  display: flex;
  align-items: flex-start;
`;

export const Content = styled.div`
  margin-left: 2rem;
  flex: 1;
`;

export const ContentHeader = styled.p`
  font-family: ${({ theme: { fonts } }) => fonts.details};
  font-weight: 700;

  display: block;
`;

export const LinkList = styled.ul`
  li {
    margin: 1rem 0;

    a {
      transition: letter-spacing 0.2s ease-in-out;
      &:hover,
      &:focus {
        letter-spacing: 2px;
      }
    }
  }
`;
