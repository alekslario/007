import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
const Wrapper = styled.div`
  max-width: 100%;
  .swiper-slide {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }
  img {
    margin-left: 20px;
  }
  .swiper-slide-active img {
    border: 2px solid grey;
    border-radius: 10px;
  }
`;
export default ({ handleSlideChange }) => {
  return (
    <Wrapper>
      <Swiper
        // install Swiper modules
        direction={"horizontal"}
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
        spaceBetween={0}
        slidesPerView={5}
        centeredSlides={true}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={handleSlideChange}
        // watchOverflow={true}
        // grabCursor={true}
      >
        <SwiperSlide>
          {" "}
          <img src="/images/bench.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/images/runner.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/images/bench.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/images/bench.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/images/bench.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="/images/bench.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </Wrapper>
  );
};
