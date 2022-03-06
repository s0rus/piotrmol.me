import styled from 'styled-components';
import GrainTexture from '../../assets/textures/grain-alternate.webp';

export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;

  background: url(${GrainTexture}) ${({ theme: { colors } }) => colors.pink};
`;
