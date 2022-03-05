import styled from 'styled-components';

export const HeroWrapper = styled.div`
  width: 100%;

  display: flex;
`;

export const LeftHeroContainer = styled.div`
  max-width: 600px;
`;

export const RightHeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

export const ExternalLinks = styled.div`
  text-align: right;
  align-self: flex-end;

  p {
    font-family: ${({ theme: { fonts } }) => fonts.details};
  }

  ul {
    li {
      a {
        font-weight: 700;

        transition: letter-spacing 0.2s ease-in-out;
        &:hover,
        &:focus {
          letter-spacing: 2px;
        }
      }
    }
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
`;
