import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  pointer-events: none;
  z-index: 9999 !important;
  top: 0;
  left: 0;

  width: 2.5rem;
  height: 2.5rem;

  backface-visibility: hidden;
  mix-blend-mode: multiply;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;

    transition: transform 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95),
      border 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95),
      border-radius 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);

    border: 1px solid
      ${({ isFancy, theme: { colors } }) =>
        isFancy ? colors.blue : colors.darkPink};
    background-color: ${({ theme: { colors } }) => colors.pink};
    border-radius: ${({ isFancy }) => (isFancy ? '0.2rem' : '0')};

    transform: scale(${({ isFancy }) => (isFancy ? '1.15' : '1')});
  }
`;
