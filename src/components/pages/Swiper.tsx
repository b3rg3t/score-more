// @ts-nocheck
import React, { useState } from "react";
// import Swiper JS
import SwiperCore, { Virtual, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/swiper-bundle.css";

// install Virtual module
SwiperCore.use([Virtual, Pagination]);

const SwiperPage = () => {
  const [slides, setSlides] = useState(
    Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`)
  );

  const addNewSlide = () => {
    setSlides((prevState) => [...prevState, `Slide ${prevState.length + 1}`]);
  };
  return (
    <main className="swiper" style={{ height: "calc(100vh - 37.2px)" }}>
      <Swiper
        className="h-100"
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        virtual
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            className="d-flex flex-column align-items-center justify-content-center h-100"
            key={slide}
            virtualIndex={index}
          >
            {slide}
            <button
              className="btn btn-primary btn-sm"
              onClick={() => addNewSlide()}
            >
              Add slide
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default SwiperPage;
