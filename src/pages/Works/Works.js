import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Theme } from '../../assets/styles/Theme';
import { BigContentTitle } from '../../components/BigContentTitle/BigContentTitle';
import {
  ContentTitle,
  ContentTitleSubtext,
} from '../../components/ContentTitle/ContentTitle';
import { StyledLetter } from '../../components/StyledLetter/StyledLetter';
import ContentTemplate from '../../templates/ContentTemplate/ContentTemplate';
import {
  WorksContent,
  WorksHeader,
  WorksWrapper,
  WorkWrapper,
} from './Works.styles';

const Works = () => {
  return (
    <ContentTemplate>
      <Helmet>
        <title>{Theme.titles.works}</title>
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
      <WorksWrapper>
        <BigContentTitle>WORKS</BigContentTitle>
        <WorksContent>
          <WorkWrapper>
            <ContentTitle>
              <StyledLetter>BALLOT</StyledLetter>
            </ContentTitle>
          </WorkWrapper>
          <WorkWrapper isInverted>
            <ContentTitle>
              <ContentTitle>
                <StyledLetter>INSTAKILOGRAM</StyledLetter>
              </ContentTitle>
            </ContentTitle>
          </WorkWrapper>
        </WorksContent>
      </WorksWrapper>
    </ContentTemplate>
  );
};

export default Works;
