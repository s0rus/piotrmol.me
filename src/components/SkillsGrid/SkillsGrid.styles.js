import styled from 'styled-components';

export const SkillsGridWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 1rem;

  @media all and (${({ theme: { screenSizes } }) => screenSizes.small}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const GridItem = styled.li`
  display: flex;
  align-items: center;

  svg {
    width: 50%;
    height: auto;
  }
`;
