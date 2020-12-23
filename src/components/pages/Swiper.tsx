// @ts-nocheck
import React, { useState, useEffect } from "react";
// import Swiper JS
import SwiperCore, { Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/swiper-bundle.css";
import Loader from "../Loader";

// install Virtual module
SwiperCore.use([Pagination, Virtual]);

const SwiperPage = () => {
  const [slides, setSlides] = useState(
    Array.from({ length: 5 }).map((el, index) => `Slide ${index + 1}`)
  );
  const [isLoading, setIsLoading] = useState(false);

  const addNewSlide = () => {
    setIsLoading(true);
    setSlides((prevState) => [...prevState, `Slide ${prevState.length + 1}`]);
  };

  const swiperParams = {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
  };

  let slideElements;

  slideElements = slides.map((slide, index) => (
    <SwiperSlide
      className="d-flex flex-column align-items-center justify-content-center h-100"
      key={slide}
      virtualIndex={index}
    >
      {slide}
      <button className="btn btn-primary btn-sm" onClick={() => addNewSlide()}>
        Add slide
      </button>
    </SwiperSlide>
  ));

  useEffect(() => {
    setIsLoading(false);
  }, [slides]);

  if (isLoading) {
    return (
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "calc(100vh - 37.2px)" }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <main className="swiper" style={{ height: "calc(100vh - 37.2px)" }}>
      <Swiper
        className="h-100"
        {...swiperParams}
        virtual={true}
        onInit={(swiper) => console.log(swiper)}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {slideElements}
      </Swiper>
    </main>
  );
};

export default SwiperPage;
