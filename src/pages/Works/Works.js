import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Theme } from '../../assets/styles/Theme';
import {
  ContentTitle,
  ContentTitleSubtext,
} from '../../components/ContentTitle/ContentTitle';
import { StyledLetter } from '../../components/StyledLetter/StyledLetter';
import ContentTemplate from '../../templates/ContentTemplate/ContentTemplate';

const Works = () => {
  return (
    <ContentTemplate>
      <Helmet>
        <title>{Theme.titles.works}</title>
      </Helmet>
      <ContentTitle>
        <strong>
          <StyledLetter>H</StyledLetter>ello! My name is Piotr
          <small>(or Peter in English)</small>. I&apos;m a web developer based
          in Laskowa, Poland. While being in love with React, I&apos;m trying to
          master it. As of now, I really want to take up a job as a(n)
          intern/junior. It would really help me grow and solidify my skills.
        </strong>
        <ContentTitleSubtext>
          As of now I really want to take up a job as a(n) intern/junior. It
          would really help me grow and solidify my skills.
        </ContentTitleSubtext>
      </ContentTitle>
    </ContentTemplate>
  );
};

export default Works;
