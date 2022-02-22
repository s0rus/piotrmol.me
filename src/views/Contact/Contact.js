import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Content } from '../../components/Content/Content.styles';
import { ContentDiv } from '../../components/ContentDiv/ContentDiv.styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import SwiperTemplate from '../../templates/SwiperTemplate/SwiperTemplate';

const Contact = () => {
  return (
    <SwiperTemplate>
      <Sidebar viewTitle="let's talk!" />
      <Content>
        <SwiperSlide>
          <ContentDiv>
            <h2>HELLO FROM CONTACT</h2>
          </ContentDiv>
        </SwiperSlide>
      </Content>
    </SwiperTemplate>
  );
};

export default Contact;
