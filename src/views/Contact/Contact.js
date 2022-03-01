import React from 'react';
import { SwiperSlide } from 'swiper/react';
import { Content } from '../../components/Content/Content.styles';
import { ContentDiv } from '../../components/ContentDiv/ContentDiv.styles';
import Sidebar from '../../components/Sidebar/Sidebar';
import SwiperTemplate from '../../templates/SwiperTemplate/SwiperTemplate';
import { ContactHeader } from './Contact.styles';

const Contact = () => {
  return (
    <SwiperTemplate>
      <Sidebar viewTitle="let's talk!" />
      <Content>
        <SwiperSlide>
          <ContentDiv>
            <ContactHeader>
              <h2>I will be more than willing to talk!</h2>
            </ContactHeader>
          </ContentDiv>
        </SwiperSlide>
      </Content>
    </SwiperTemplate>
  );
};

export default Contact;
