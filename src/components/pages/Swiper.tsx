import React from "react";
import SwiperComponent from "../swiper/SwiperComponent";

const SwiperPage = ({ match }: any) => {
  const {
    params: { id, gameId },
  } = match;
  return (
    <main className="h-100">
      <SwiperComponent id={id} gameId={gameId} />
    </main>
  );
};

export default SwiperPage;
