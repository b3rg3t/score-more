// @ts-nocheck
import React, { useState, useEffect } from "react";
// import Swiper JS
import SwiperCore, { Pagination, Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper styles
import "swiper/swiper-bundle.css";
import PlayerList from "../game/activeGame/PlayerList";

import Loader from "../Loader";
import { GET_STORAGE } from "../utils/localStorage";

// install Virtual module
SwiperCore.use([Pagination, Virtual]);

const SwiperComponent = ({ id, gameId }: any) => {
  // const [slides, setSlides] = useState(
  //   Array.from({ length: 1 }).map((el, index) => `Slide ${index + 1}`)
  // );
  const [slides, setSlides] = useState([] as any);
  const [isActiveRound, setIsActiveRound] = useState(null as any);
  const [swiper, setSwiper] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // const addNewSlide = () => {
  //   setIsLoading(true);
  //   setSlides((prevState) => [...prevState, `Slide ${prevState.length + 1}`]);
  // };

  useEffect(() => {
    const games = GET_STORAGE("games");
    if (games) {
      const activeGame = games.gameIds.find((game) => {
        return game.id === id;
      });
      setSlides(activeGame.round);
      setIsActiveRound(activeGame.activeRound.id);
    }
  }, [id]);

  const swiperParams = {
    spaceBetween: 0,
    slidesPerView: 1,
    pagination: {
      clickable: true,
      dynamicBullets: true,
    },
  };

  let slideElements;

  useEffect(() => {
    if (swiper) {
      const activeSlide = slides.find((slide: any) => slide.id === gameId)
      swiper.slideTo(activeSlide.round -1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swiper]);

  slideElements = slides.map((slide, index) => (
    <SwiperSlide
      className="d-flex flex-column align-items-center justify-content-center h-100"
      key={slide.round}
      virtualIndex={index}
    >
      <div className="h-100 w-100">
        <PlayerList
          id={id}
          activeGame={slide}
          isActiveRound={isActiveRound === slide.id ? true : false}
          // addNewSlide={addNewSlide}
        />
      </div>
    </SwiperSlide>
  ));

const updateActiveSwiper = (s: any) => {
  setSwiper(s)
  const activeSlide = slides.find((slide: any) => slide.round === s.activeIndex + 1)
  window.history.replaceState(
    null,
    "Viewdoc",
    `/game/${id}/${activeSlide?.id}`
  );
}

  useEffect(() => {
    setIsLoading(false);
  }, [slides]);

  if (isLoading) {
    return (
      <div className="d-flex align-items-center justify-content-center h-100">
        <Loader />
      </div>
    );
  }
  return (
    <main className="swiper h-100">
      <Swiper
        className="h-100"
        {...swiperParams}
        virtual={true}
        onInit={(s) => console.log(s)}
        onSwiper={(s) => setSwiper(s)}
        onSlideChange={(s) =>  updateActiveSwiper(s)}
      >
        {slideElements}
      </Swiper>
    </main>
  );
};
export default SwiperComponent;
