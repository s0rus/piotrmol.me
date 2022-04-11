import styled from 'styled-components';

export const ContentTitleWrapper = styled.div`
  display: flex;
  justify-content: ${({ isInverted }) =>
    isInverted ? 'flex-end' : 'flex-start'};

  max-width: 80ch;
  margin-bottom: 2rem;
`;

export const ContentTitle = styled.p`
  max-width: 40ch;

  font-size: 1.2rem;
  display: block;
`;

export const ContentTitleSubtext = styled.span`
  display: block;

  font-size: 1rem;
`;
