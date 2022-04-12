import styled from 'styled-components';

export const CoursesParagraph = styled.p`
  margin-bottom: 0.5rem;
`;

export const CourseList = styled.ul`
  display: flex;
  flex-flow: column nowrap;
`;

export const CourseListItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0.25em 0;

  svg {
    max-width: 1rem;
    height: auto;

    margin-right: 0.5rem;
  }
`;

export const CourseName = styled.div`
  display: inline;
`;
