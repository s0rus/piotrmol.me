import styled from 'styled-components';

export const ContentDiv = styled.div`
  min-width: 600px;
  max-width: 600px;
  margin-bottom: 1em;

  border: 2px solid ${({ theme }) => theme.colors.blue};
  /* border-radius: 3px; */
  background-color: ${({ theme }) => theme.colors.blue};

  h2 {
    padding: 8px 16px;
    font-size: clamp(24px, 2.5vw, 32px);
  }
`;
