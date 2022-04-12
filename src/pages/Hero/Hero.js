import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Theme } from '../../assets/styles/Theme';
import { BigContentTitle } from '../../components/BigContentTitle/BigContentTitle';
import {
  ContentTitle,
  ContentTitleSubtext,
  ContentTitleWrapper,
} from '../../components/ContentTitle/ContentTitle';
import Cursor from '../../components/Cursor/Cursor';
import SkillsGrid from '../../components/SkillsGrid/SkillsGrid';
import Courses from '../../components/Courses/Courses';
import { StyledLetter } from '../../components/StyledLetter/StyledLetter';
import ContentTemplate from '../../templates/ContentTemplate/ContentTemplate';
import {
  ExternalLinks,
  HeroGraphic,
  HeroWrapper,
  LeftHeroContainer,
  LeftSkillsContainer,
  RightHeroContainer,
  RightSkillsContainer,
  SectionContent,
  SectionWrapper,
  SkillsWrapper,
} from './Hero.styles';
import Interests from '../../components/Interests/Interests';
import { ExternalLink } from '../../components/ExternalLink/ExternalLink';

const Hero = () => {
  return (
    <>
      <ContentTemplate>
        <Helmet>
          <title>{Theme.titles.hero}</title>
        </Helmet>
        <HeroWrapper>
          <LeftHeroContainer>
            <ContentTitleWrapper>
              <ContentTitle>
                <strong>
                  <StyledLetter>H</StyledLetter>ello! My name is Piotr
                  <small> (or Peter in English)</small>. I&apos;m a web
                  developer based in Laskowa, Poland. While being in love with
                  React, I&apos;m trying to master it.
                </strong>
                <ContentTitleSubtext>
                  As of now I really want to take up a job as a(n)
                  intern/junior. It would really help me grow and solidify my
                  skills.
                </ContentTitleSubtext>
              </ContentTitle>
            </ContentTitleWrapper>
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
                  <ExternalLink
                    href='https://www.github.com/s0rus'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    Github
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    target='_blank'
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/in/piotrmol/'
                  >
                    LinkedIn
                  </ExternalLink>
                </li>
              </ul>
            </ExternalLinks>
          </RightHeroContainer>
        </HeroWrapper>
        <SectionWrapper>
          <BigContentTitle isInverted>PROWESS</BigContentTitle>
          <SectionContent isInverted>
            <ContentTitleWrapper>
              <ContentTitle>
                <strong>
                  <StyledLetter>T</StyledLetter>
                  oolbox of a web developer is their greatest power. The more
                  technologies you know, the more versitility you can bring to
                  the table.
                </strong>
                <ContentTitleSubtext>
                  I constantly strive to expand this box of things I know,
                  it&apos;s hard as new and potentially better tech pops up here
                  and there, but what is left for me to just try to keep up and
                  aim for being the best version of myself.
                </ContentTitleSubtext>
              </ContentTitle>
            </ContentTitleWrapper>
            <SkillsWrapper>
              <LeftSkillsContainer>
                <strong>Techstack</strong>
                <SkillsGrid />
              </LeftSkillsContainer>
              <RightSkillsContainer>
                <strong>Getting there</strong>
                <Courses />
              </RightSkillsContainer>
            </SkillsWrapper>
          </SectionContent>
        </SectionWrapper>
        <SectionWrapper>
          <BigContentTitle>ABOUT</BigContentTitle>
          <SectionContent>
            <ContentTitleWrapper>
              <ContentTitle>
                <strong>
                  <StyledLetter>I</StyledLetter>
                  nterests are something that gives me motivation to keep going
                  and grow. I can zone myself from the world and do stuff that
                  fulfills me.
                </strong>
                <ContentTitleSubtext>
                  Some of the hobbies I&apos;m looking forward to getting into,
                  but hey, everybody started somewhere.
                </ContentTitleSubtext>
              </ContentTitle>
            </ContentTitleWrapper>
            <Interests />
          </SectionContent>
        </SectionWrapper>
      </ContentTemplate>
      <Cursor />
    </>
  );
};

export default Hero;
