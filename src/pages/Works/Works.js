import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Theme } from '../../assets/styles/Theme';
import { BigContentTitle } from '../../components/BigContentTitle/BigContentTitle';
import {
  ContentTitle,
  ContentTitleSubtext,
} from '../../components/ContentTitle/ContentTitle';
import {
  SectionContent,
  SectionWrapper,
} from '../../components/Sections/Sections.styles';
import { StyledLetter } from '../../components/StyledLetter/StyledLetter';
import ContentTemplate from '../../templates/ContentTemplate/ContentTemplate';
import {
  WorkDescription,
  WorksContent,
  WorksHeader,
  WorkStack,
  WorkStackList,
  WorkTitle,
  WorkWrapper,
} from './Works.styles';

import { ReactComponent as Arrow } from '../../assets/icons/arrow-top-right.svg';

const Works = () => {
  return (
    <ContentTemplate>
      <Helmet>
        <title>{Theme.titles.works}</title>
        <meta name='twitter:title' content='Piotr Mól - works' />
      </Helmet>
      <WorksHeader>
        <ContentTitle>
          <strong>
            <StyledLetter>P</StyledLetter>ersonal projects are a great way to
            grow and get better. I mean, if you need some tool to complete a
            project or make it better, just learn it.
          </strong>
          <ContentTitleSubtext>
            You can find some of my projects here, along with the source code
            and technologies used to make them come to life.
          </ContentTitleSubtext>
        </ContentTitle>
      </WorksHeader>
      <SectionWrapper>
        <BigContentTitle>WORKS</BigContentTitle>
        <SectionContent>
          <WorksContent>
            <WorkWrapper>
              <WorkTitle>
                <a
                  href='https://ballot-polls.netlify.app/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span>BALLOT</span>
                  <Arrow />
                </a>
              </WorkTitle>
              <WorkDescription>
                <p>
                  Ballot is an app that lets you create polls and view the
                  results in real time. You can also share the poll through a
                  link or view the results directly. I have created it mainly to
                  learn routing.
                </p>
              </WorkDescription>
              <WorkStack>
                <h4>TECHSTACK:</h4>
                <WorkStackList>
                  <li>React</li>
                  <li>React Router</li>
                  <li>Typescript</li>
                  <li>Firebase</li>
                  <li>Styled Components</li>
                </WorkStackList>
              </WorkStack>
            </WorkWrapper>
            <WorkWrapper isInverted>
              <WorkTitle isInverted>
                <a
                  href='https://instakilogram.netlify.app/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span>INSTAKILOGRAM</span>
                  <Arrow />
                </a>
              </WorkTitle>
              <WorkDescription>
                <p>
                  As the name suggests, it is an app that is a clone of
                  instagram to some degree. I have decided to create such thing
                  to see if I can create the exact same design as the original
                  on my own from scratch.
                </p>
              </WorkDescription>
              <WorkStack>
                <h4>TECHSTACK:</h4>
                <WorkStackList>
                  <li>React</li>
                  <li>React Router</li>
                  <li>Firebase</li>
                </WorkStackList>
              </WorkStack>
            </WorkWrapper>
          </WorksContent>
          <WorksContent>
            <WorkWrapper>
              <WorkTitle>
                <a
                  href='https://mapa-goryli.netlify.app/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span>COMMUNITY MAP</span>
                  <Arrow />
                </a>
              </WorkTitle>
              <WorkDescription>
                <p>
                  The idea behind this app was to give a certain discord
                  community a wat to get to know eachother better by showing
                  where you are from. It also has an option to write some stuff
                  about you.
                </p>
              </WorkDescription>
              <WorkStack>
                <h4>TECHSTACK:</h4>
                <WorkStackList>
                  <li>React</li>
                  <li>React Router</li>
                  <li>Styled Components</li>
                  <li>Mapbox API</li>
                  <li>MongoDB Atlas</li>
                  <li>Express.js + Mongoose</li>
                  <li>Discord API</li>
                </WorkStackList>
              </WorkStack>
            </WorkWrapper>
            <WorkWrapper isInverted>
              <WorkTitle isInverted>
                <a
                  href='https://travelify.netlify.app/'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  <span>TRAVELIFY</span>
                  <Arrow />
                </a>
              </WorkTitle>
              <WorkDescription>
                <p>
                  Travelify is a really simple app which lets you mark out
                  countries You have visited during your lifetime while
                  providing basic informations about certain country.
                </p>
              </WorkDescription>
              <WorkStack>
                <h4>TECHSTACK:</h4>
                <WorkStackList>
                  <li>React</li>
                  <li>React Router</li>
                  <li>Firebase</li>
                </WorkStackList>
              </WorkStack>
            </WorkWrapper>
          </WorksContent>
        </SectionContent>
      </SectionWrapper>
    </ContentTemplate>
  );
};

export default Works;
