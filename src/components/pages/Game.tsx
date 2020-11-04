/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ActiveGame from "../game/activeGame/ActiveGame";
// import ActiveGayme from "../game/activeGame/AtiveGayme";

const Game = ({ match }: any) => {
  const {
    params: { id },
  } = match;

  return (
    <section className="player-list overflow-auto">
      {/* <ActiveGayme /> */}
      {id  && <ActiveGame id={id} />}
    </section>
  );
};

export default Game;
