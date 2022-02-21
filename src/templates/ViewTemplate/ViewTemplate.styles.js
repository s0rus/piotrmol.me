import styled from 'styled-components';
import GrainTexture from '../../assets/icons/grain-alternate.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 2em 0;

  overflow: hidden;
  background: url(${GrainTexture}) ${({ theme }) => theme.colors.darkPink};
  color: ${({ theme }) => theme.colors.white};
`;

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 1em;

  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
`;
