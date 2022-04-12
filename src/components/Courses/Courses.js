import React from 'react';

import { ReactComponent as UdemyLogo } from '../../assets/icons/udemy-logo.svg';
import { ReactComponent as TheOdinProjectLogo } from '../../assets/icons/theodinproject-logo.svg';

import {
  CourseList,
  CourseListItem,
  CourseName,
  CoursesParagraph,
} from './Courses.styles';

const Courses = () => {
  return (
    <>
      <CoursesParagraph>
        Courses I&apos;ve done or I&apos;m doing right now.
      </CoursesParagraph>
      <CourseList>
        <CourseListItem>
          <TheOdinProjectLogo />
          <CourseName>
            <strong>The Odin Project</strong> - DONE
          </CourseName>
        </CourseListItem>
        <CourseListItem>
          <UdemyLogo />
          <CourseName>
            <strong>React - The complete guide</strong> - ONGOING
          </CourseName>
        </CourseListItem>
        <CourseListItem>
          <UdemyLogo />
          <CourseName>
            <strong>The Complete React Native</strong> - ONGOING
          </CourseName>
        </CourseListItem>
      </CourseList>
    </>
  );
};

export default Courses;
