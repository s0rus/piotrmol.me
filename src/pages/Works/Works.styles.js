import styled from 'styled-components';
import { BigContentTitle } from '../../components/BigContentTitle/BigContentTitle';

export const WorksHeader = styled.section`
  display: flex;
  align-items: flex-start;

  padding-top: 4rem;
`;

export const WorksWrapper = styled.section`
  padding-top: 4rem;

  ${BigContentTitle} {
    text-align: right;
  }
`;

export const WorksContent = styled.ul`
  display: flex;
  flex-flow: column nowrap;

  border-right: 3px solid ${({ theme: { colors } }) => colors.blue};
  padding-right: 2rem;
  padding-bottom: 4rem;
`;

export const WorkWrapper = styled.li`
  align-self: ${({ isInverted }) => (isInverted ? 'flex-end' : 'flex-start')};
`;
