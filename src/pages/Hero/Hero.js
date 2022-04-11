import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Theme } from '../../assets/styles/Theme';
import { BigContentTitle } from '../../components/BigContentTitle/BigContentTitle';
import {
  ContentTitle,
  ContentTitleSubtext,
  ContentTitleWrapper,
} from '../../components/ContentTitle/ContentTitle';
import Cursor from '../../components/Cursor/Cursor';
import FancyLink from '../../components/FancyLink/FancyLink';
import SkillsGrid from '../../components/SkillsGrid/SkillsGrid';
import { StyledLetter } from '../../components/StyledLetter/StyledLetter';
import ContentTemplate from '../../templates/ContentTemplate/ContentTemplate';
import {
  ExternalLinks,
  HeroGraphic,
  HeroWrapper,
  InterestContent,
  InterestGraphic,
  InterestsFooter,
  InterestsWrapper,
  LeftHeroContainer,
  LeftSkillsContainer,
  RightHeroContainer,
  RightSkillsContainer,
  SectionContent,
  SectionWrapper,
  SkillsWrapper,
} from './Hero.styles';

const Hero = () => {
  const [isFancy, toggleIsFancy] = useState(false);

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
                  <FancyLink
                    href='https://www.github.com/s0rus'
                    target='_blank'
                    rel='noopener noreferrer'
                    toggleIsFancy={toggleIsFancy}
                  >
                    Github
                  </FancyLink>
                </li>
                <li>
                  <FancyLink
                    href='https://www.linkedin.com/in/piotrmol/'
                    target='_blank'
                    rel='noopener noreferrer'
                    toggleIsFancy={toggleIsFancy}
                  >
                    LinkedIn
                  </FancyLink>
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
                <p>To level up myself I try to learn constantly:</p>
                <ul>
                  <li>
                    <b>The Odin Project</b> - DONE
                  </li>
                  <li>
                    <b>React - The complete guide</b> - IN PROGRESS
                  </li>
                  <li>
                    <b>The Complete React Native</b> - IN PROGRESS
                  </li>
                </ul>
              </RightSkillsContainer>
            </SkillsWrapper>
          </SectionContent>
        </SectionWrapper>
        <SectionWrapper>
          <BigContentTitle>ABOUT</BigContentTitle>
          <SectionContent>
            <ContentTitleWrapper isInverted>
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
            <InterestsWrapper>
              <InterestContent>
                <InterestGraphic>
                  <span>CLICK</span>
                  <span>CLICK</span>
                  <span>CLICK</span>
                </InterestGraphic>
                <strong>Coding</strong>
                <p>
                  I just love to <small>click, click, click</small> to express
                  my ideas and myself through code and the feeling of seeing my
                  idea come to life is something I can&apos;t cherish enough.
                </p>
                <p>
                  As of now React is my main thing, I&apos;ve also written stuff
                  in Node.js and used Firebase, MongoDB, REST APIs, GIT and
                  probably things I can&apos;t list now.
                </p>
                <p>
                  To grow my plan is simple - get to know Typescript and
                  Storybook as much as possible.
                </p>
              </InterestContent>
              <InterestContent>
                <InterestGraphic>
                  <span>DE</span>
                  <span>LIGHT</span>
                  <span>FUL</span>
                </InterestGraphic>
                <strong>Esport</strong>
                <p>
                  Everyone loves some competition in their lives. For me,
                  watching people compete in my favourite games is something
                  that satisfies this need.
                </p>
                <p>
                  I find it <small>delightful</small> to watch because there are
                  some great personalities and the crowd of passionate people
                  makes it that much better.
                </p>
                <p>
                  Esport grows bigger and bigger every year and honestly after
                  following this industry for like eight years now and seeing
                  all of this progress is just so cool.
                </p>
                <p>
                  Definitely my favourite to follow is{' '}
                  <FancyLink
                    href='https://lolesports.com/schedule?leagues=lec'
                    target='_blank'
                    rel='noopener noreferrer'
                    toggleIsFancy={toggleIsFancy}
                  >
                    LEC
                  </FancyLink>
                  .
                </p>
              </InterestContent>
            </InterestsWrapper>
            <InterestsFooter>
              <InterestContent>
                <InterestGraphic>
                  <span>BALIS</span>
                  <span>AND</span>
                  <span>KEEBS</span>
                </InterestGraphic>
                <strong>Things I wanna try</strong>
                <p>
                  Stuff I am looking forward to trying are{' '}
                  <small>balis and keebs</small> (balisongs and keyboards).
                </p>
                <p>
                  I want to get into flipping butterfly knives and make myself a
                  sizable collection in the future. I don&apos;t really know
                  why, but it looks undeniably fun and hard to master in my
                  view.
                </p>
                <p>
                  Also, I would like to own a collection of cool looking
                  keyboards because the fact of collecting all the different
                  parts that are super hard to buy because of a high demand and
                  building your own keyboard seems truly interesting to me.
                </p>
                <p>
                  Currently I own{' '}
                  <FancyLink
                    href='https://www.keychron.com/products/keychron-k2-wireless-mechanical-keyboard?variant=31063869587545'
                    target='_blank'
                    rel='noopener noreferrer'
                    toggleIsFancy={toggleIsFancy}
                  >
                    Keychron K2
                  </FancyLink>{' '}
                  - I love it to say the least.
                </p>
              </InterestContent>
            </InterestsFooter>
          </SectionContent>
        </SectionWrapper>
      </ContentTemplate>
      <Cursor isFancy={isFancy} />
    </>
  );
};

export default Hero;
