import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Theme } from '../../assets/styles/Theme';
import { BigContentTitle } from '../../components/BigContentTitle/BigContentTitle';
import {
  ContentTitle,
  ContentTitleSubtext,
} from '../../components/ContentTitle/ContentTitle';
import Cursor from '../../components/Cursor/Cursor';
import FancyLink from '../../components/FancyLink/FancyLink';
import { StyledLetter } from '../../components/StyledLetter/StyledLetter';
import ContentTemplate from '../../templates/ContentTemplate/ContentTemplate';
import {
  AboutContainer,
  AboutContentTitleWrapper,
  AboutWrapper,
  ExternalLinks,
  GridItem,
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
  SkillsGrid,
  SkillsWrapper,
} from './Hero.styles';

import { ReactComponent as JavascriptLogo } from '../../assets/icons/javascript-logo.svg';
import { ReactComponent as ReactLogo } from '../../assets/icons/react-logo.svg';
import { ReactComponent as CssLogo } from '../../assets/icons/css-logo.svg';
import { ReactComponent as ReactRouterLogo } from '../../assets/icons/reactrouter-logo.svg';
import { ReactComponent as FirebaseLogo } from '../../assets/icons/firebase-logo.svg';
import { ReactComponent as GitLogo } from '../../assets/icons/git-logo.svg';
import { ReactComponent as TerminalLogo } from '../../assets/icons/terminal-logo.svg';

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
            <ContentTitle>
              <strong>
                <StyledLetter>H</StyledLetter>ello! My name is Piotr
                <small>(or Peter in English)</small>. I&apos;m a web developer
                based in Laskowa, Poland. While being in love with React,
                I&apos;m trying to master it. As of now, I really want to take
                up a job as a(n) intern/junior. It would really help me grow and
                solidify my skills.
              </strong>
              <ContentTitleSubtext>
                As of now I really want to take up a job as a(n) intern/junior.
                It would really help me grow and solidify my skills.
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
        <AboutWrapper>
          <BigContentTitle>ABOUT</BigContentTitle>
          <AboutContainer>
            <AboutContentTitleWrapper>
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
            </AboutContentTitleWrapper>
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
          </AboutContainer>
          <BigContentTitle isInverted>SKILLS</BigContentTitle>
          <AboutContainer isInverted>
            <AboutContentTitleWrapper>
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
            </AboutContentTitleWrapper>
            <SkillsWrapper>
              <LeftSkillsContainer>
                <strong>Techstack</strong>
                <SkillsGrid>
                  <GridItem>
                    <JavascriptLogo />
                  </GridItem>
                  <GridItem>
                    <ReactLogo />
                  </GridItem>
                  <GridItem>
                    <CssLogo />
                  </GridItem>
                  <GridItem>
                    <ReactRouterLogo />
                  </GridItem>
                  <GridItem>
                    <FirebaseLogo />
                  </GridItem>
                  <GridItem>
                    <GitLogo />
                  </GridItem>
                  <GridItem>
                    <TerminalLogo />
                  </GridItem>
                </SkillsGrid>
              </LeftSkillsContainer>
              <RightSkillsContainer>
                <strong>Getting there</strong>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  sit atque, fuga similique sequi incidunt fugiat nihil, quam
                  asperiores culpa sapiente iusto enim laboriosam aliquid porro
                  sunt. Cumque, sit officia.
                </p>
              </RightSkillsContainer>
            </SkillsWrapper>
          </AboutContainer>
        </AboutWrapper>
      </ContentTemplate>
      <Cursor isFancy={isFancy} />
    </>
  );
};

export default Hero;
