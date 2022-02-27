import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Content } from '../../components/Content/Content.styles';
import { ContentDiv } from '../../components/ContentDiv/ContentDiv.styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import SwiperTemplate from '../../templates/SwiperTemplate/SwiperTemplate';

const Works = () => {
  return (
    <SwiperTemplate>
      <Sidebar viewTitle="stuff I've made thus far" isLight />
      <Content>
        <SwiperSlide>
          <ContentDiv>
            <h2>Hello!</h2>
            <h2>
              My name is Piotr Mól and I am a web developer fascinated with
              frontend and cool user experiences.
            </h2>
            <h2>Hello!</h2>
          </ContentDiv>
        </SwiperSlide>
      </Content>
    </SwiperTemplate>
  );
};

export default Works;
