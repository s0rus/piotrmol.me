import React from 'react';
// import ProfilePic from '../../assets/icons/potential_profile_pic.webp';
import { SwiperSlide } from 'swiper/react';
import Sidebar from '../../components/Sidebar/Sidebar';
import SwiperTemplate from '../../templates/SwiperTemplate/SwiperTemplate';
import { Content } from '../../components/Content/Content.styles';
import { ContentDiv } from '../../components/ContentDiv/ContentDiv.styles';
import { HeaderWrapper, HeroContent, ResumeButtonWrapper } from './Hero.styles';
import { ReactComponent as DownloadIcon } from '../../assets/icons/download.svg';

const Hero = () => {
  return (
    <SwiperTemplate>
      <Sidebar />
      <Content>
        <SwiperSlide>
          <ContentDiv>
            {/* <HeaderImage src={ProfilePic} alt='Piotr Mól' /> */}
            <HeaderWrapper>
              <h2>piotr mól</h2>
            </HeaderWrapper>
            <HeroContent>
              <ul>
                <li>
                  <p>
                    I am a <span>WEB DEVELOPER</span> who wants
                    <br />
                    to make cool user experiences.
                  </p>
                </li>
                <li>
                  <p>
                    Driven by being in love with <span>FRONTEND</span>,
                    <br />
                    I want to grow and learn
                    <br />
                    as much as possible.
                  </p>
                </li>
                <li>
                  <p>
                    As of now, I am looking for
                    <br />a <span>JOB OPPORTUNITY</span>
                  </p>
                </li>
              </ul>
            </HeroContent>
            <ResumeButtonWrapper>
              <a href='/cv' download='CV_Piotr_Mól.pdf' target='_blank'>
                <p>DOWNLOAD RESUME</p>
                <DownloadIcon />
              </a>
            </ResumeButtonWrapper>
          </ContentDiv>
        </SwiperSlide>
      </Content>
    </SwiperTemplate>
  );
};

export default Hero;
