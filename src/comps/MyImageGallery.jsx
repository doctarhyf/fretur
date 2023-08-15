import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

import "../App.css";

import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

export default function MyImageGallery({ images }) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, EffectCoverflow]}
        className="mySwiper"
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {images.map((img, i) => (
          <SwiperSlide>
            <img src={img.original} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
