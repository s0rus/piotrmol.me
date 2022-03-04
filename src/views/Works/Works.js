import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Content } from '../../components/Content/Content.styles';
import { ContentDiv } from '../../components/ContentDiv/ContentDiv.styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import SwiperTemplate from '../../templates/SwiperTemplate/SwiperTemplate';
import { ContentSection, HeaderWrapper, WorksContent } from './Works.styles';
import { ReactComponent as CodeLogo } from '../../assets/icons/code.svg';

const Works = () => {
  return (
    <SwiperTemplate>
      <Sidebar viewTitle="stuff I've made thus far" isLight />
      <Content>
        <SwiperSlide>
          <ContentDiv>
            <HeaderWrapper>
              <h2>WORKZ.</h2>
              <CodeLogo />
            </HeaderWrapper>
            <WorksContent>
              <ContentSection>
                <h3>
                  instakilogram<span>001</span>
                </h3>
              </ContentSection>
            </WorksContent>
          </ContentDiv>
        </SwiperSlide>
      </Content>
    </SwiperTemplate>
  );
};

export default Works;
