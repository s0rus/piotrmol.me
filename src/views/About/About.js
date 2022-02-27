import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Content } from '../../components/Content/Content.styles';
import { ContentDiv } from '../../components/ContentDiv/ContentDiv.styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import SwiperTemplate from '../../templates/SwiperTemplate/SwiperTemplate';
import {
  AboutContent,
  ContentSection,
  HeaderWrapper,
  LogoBar,
} from './About.styles';

const About = () => {
  return (
    <SwiperTemplate>
      <Sidebar viewTitle="few words 'bout me" isLight />
      <Content>
        <SwiperSlide>
          <ContentDiv>
            <HeaderWrapper>
              <h2>
                AB<span>AB</span>ABABABAB
                <br />
                OUT<span>OUT</span>OUTOUT
              </h2>
            </HeaderWrapper>
            <AboutContent>
              <ContentSection>
                <h3>
                  <span>1</span>hello;
                </h3>
                <p>
                  My name is <span>Piotr Mól</span> and I really, really want to
                  take up a web developer position. I am from{' '}
                  <span>Laskowa</span>, Poland (like 2 hours ride from Cracow)
                </p>
                <p>
                  I am in love with <span>React</span> - I want to master it,
                  then I plan to move to other frameworks!
                </p>
              </ContentSection>
              <ContentSection>
                <h3>
                  <span>2</span>hobbies;
                </h3>
                <p>
                  Definetely <span>coding</span> cool stuff that works and
                  serves some particular purpose gives me a way to{' '}
                  <span>express</span> myself - that is really important for me.
                </p>
                <p>
                  Secondly, my favourite thing as of now is <span>esport</span>.
                  I love people, competition and overall <span>vibes</span> of
                  this environment which is growing really, and I mean really
                  fast.
                </p>
                <p>
                  I don&apos;t really watch <span>tv series</span> that much but
                  when I find the one I just have to watch it <span>ASAP</span>.
                </p>
              </ContentSection>
              <ContentSection>
                <h3>
                  <span>3</span>thingies;
                </h3>
                <p>
                  One of the coolest things I want to take up in the future is{' '}
                  <span>balisong flipping</span> and collecting cool knives.
                </p>
                <p>
                  Also, in my view a hobby of collecting beautiful{' '}
                  <span>keyboards</span>, lubing every single switch and putting
                  together your own keeb from various parts is something I will
                  get into <span>for sure</span>!
                </p>
              </ContentSection>
            </AboutContent>
            <LogoBar />
          </ContentDiv>
        </SwiperSlide>
      </Content>
    </SwiperTemplate>
  );
};

export default About;
