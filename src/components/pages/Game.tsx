import React from "react";
import ActiveGame from "../game/activeGame/ActiveGame";

const Game = ({ match }: any) => {
  const {
    params: { id },
  } = match;

  return (
    <section className="player-list overflow-auto">
      {id  && <ActiveGame id={id} />}
    </section>
  );
};

export default Game;
