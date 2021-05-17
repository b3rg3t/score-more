/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import ActiveGame from "../game/activeGame/ActiveGame";
// import ActiveGayme from "../game/activeGame/AtiveGayme";

const Game = ({ match }: any) => {
  const {
    params: { id, gameId },
  } = match;

  return (
    <section className="player-list overflow-auto">
      {id  && <ActiveGame id={id} gameId={gameId} />}
    </section>
  );
};

export default Game;
