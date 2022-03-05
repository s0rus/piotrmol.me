import React from 'react';
import { ContentTitle } from '../../components/ContentTitle/ContentTitle';
import { StyledLetter } from '../../components/StyledLetter/StyledLetter';
import ContentTemplate from '../../templates/ContentTemplate/ContentTemplate';
import {
  ExternalLinks,
  HeroGraphic,
  HeroWrapper,
  LeftHeroContainer,
  RightHeroContainer,
} from './Hero.styles';

const Hero = () => {
  return (
    <ContentTemplate>
      <HeroWrapper>
        <LeftHeroContainer>
          <ContentTitle>
            <strong>
              <StyledLetter>H</StyledLetter>
              ello! My name is Piotr <small>(or Peter in english)</small>.
              I&apos;m a web developer based in Laskowa, Poland. While being in
              love with React I&apos;m trying to master it.
            </strong>
          </ContentTitle>
          <div>
            <p>
              As of now I really want to take up a job as a(n) intern/junior. It
              would really help me grow and solidify my skills.
            </p>
          </div>
        </LeftHeroContainer>
        <RightHeroContainer>
          <HeroGraphic>
            WEB
            <br />
            DEV.
          </HeroGraphic>
          <ExternalLinks>
            <p>Find me</p>
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
    </ContentTemplate>
  );
};

export default Hero;
