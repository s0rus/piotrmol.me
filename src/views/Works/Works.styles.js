import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pink};

  display: flex;
  align-items: center;

  color: ${({ theme }) => theme.colors.blue};

  h2 {
    font-size: clamp(64px, 5vw, 68px);
  }

  svg {
    width: clamp(64px, 5vw, 68px);
    height: auto;
  }
`;

export const WorksContent = styled.div`
  padding: 1em 2em;
`;

export const ContentSection = styled.div`
  margin-bottom: 16px;

  h3 {
    font-size: clamp(48px, 5vw, 54px);
    font-family: 'Playfair Display', serif;
    text-align: right;
  }

  p {
    margin-top: 8px;
    font-size: clamp(16px, 1vw, 24px);
  }

  span {
    color: ${({ theme }) => theme.colors.green};
    font-family: 'Playfair Display', serif;
    font-weight: 900;
  }
`;
