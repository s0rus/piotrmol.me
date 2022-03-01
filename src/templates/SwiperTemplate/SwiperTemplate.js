import React from 'react';
import { Scrollbar, Mousewheel } from 'swiper/core';
import { StyledSwiper } from './SwiperTemplate.styles';

// eslint-disable-next-line react/prop-types
const SwiperTemplate = ({ children }) => {
  return (
    <StyledSwiper
      watchSlidesProgress
      modules={[Scrollbar, Mousewheel]}
      direction={'vertical'}
      slidesPerView={'auto'}
      centeredSlides={false}
      loop={false}
      freeMode={{
        enabled: true,
        sticky: false,
      }}
      scrollbar={{
        el: '.swiper-scrollbar',
        draggable: true,
        snapOnRelease: false,
      }}
      mousewheel
      allowTouchMove={false}
      resizeObserver={false}
    >
      {children}
    </StyledSwiper>
  );
};

export default SwiperTemplate;
