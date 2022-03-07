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
  AboutContainer,
  AboutContentTitleWrapper,
  AboutWrapper,
  ExternalLinks,
  HeroGraphic,
  HeroWrapper,
  InterestsWrapper,
  LeftHeroContainer,
  RightHeroContainer,
} from './Hero.styles';

const Hero = () => {
  return (
    <ContentTemplate>
      <Helmet>
        <title>{Theme.titles.hero}</title>
      </Helmet>
      <HeroWrapper>
        <LeftHeroContainer>
          <ContentTitle>
            <strong>
              <StyledLetter>H</StyledLetter>
              ello! My name is Piotr <small>(or Peter in english)</small>.
              I&apos;m a web developer based in Laskowa, Poland. While being in
              love with React I&apos;m trying to master it.
            </strong>
            <ContentTitleSubtext>
              As of now I really want to take up a job as a(n) intern/junior. It
              would really help me grow and solidify my skills.
            </ContentTitleSubtext>
          </ContentTitle>
        </LeftHeroContainer>
        <RightHeroContainer>
          <HeroGraphic>
            WEB
            <br />
            DEV.
          </HeroGraphic>
          <ExternalLinks>
            <p>Find me:</p>
            <ul>
              <li>
                <a
                  href='https://www.github.com/s0rus'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  href='https://www.linkedin.com/in/piotrmol/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </ExternalLinks>
        </RightHeroContainer>
      </HeroWrapper>
      <AboutWrapper>
        <AboutContainer>
          <BigContentTitle>ABOUT.</BigContentTitle>
          <AboutContentTitleWrapper>
            <ContentTitle>
              <strong>
                <StyledLetter>I</StyledLetter>
                nterests are something that gives me motivation to keep going
                and grow. I can zone myself from the world and do stuff that
                fullfils me.
              </strong>
              <ContentTitleSubtext>
                Some of the hobbies I&apos;m looking forward to getting into but
                hey, everybody started somewhere.
              </ContentTitleSubtext>
            </ContentTitle>
          </AboutContentTitleWrapper>
          <InterestsWrapper>
            <div>
              <strong>Coding</strong>
              <p>
                Definetely coding cool stuff that works and serves some
                particular purpose gives me a way to express myself - that is
                really important for me.
              </p>
              <p>
                Definetely coding cool stuff that works and serves some
                particular purpose gives me a way to express myself - that is
                really important for me.
              </p>
            </div>
            <div>
              <strong>Esport</strong>
              <p>
                Secondly, my favourite thing as of now is esport. I love people,
                competition and overall vibes of this environment which is
                growing really, and I mean really fast.
              </p>
              <p>
                Secondly, my favourite thing as of now is esport. I love people,
                competition and overall vibes of this environment which is
                growing really, and I mean really fast.
              </p>
            </div>
          </InterestsWrapper>
        </AboutContainer>
      </AboutWrapper>
    </ContentTemplate>
  );
};

export default Hero;
