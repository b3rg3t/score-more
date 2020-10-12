import React from "react";
import DisplayPlayers from "../game/DisplayPlayers";
import GameForm from "../game/GameForm";

const NewGame = () => {
  return (
    <section className="p-2">
      <h1>New Game</h1>
      <GameForm />
      <DisplayPlayers />
    </section>
  );
};

export default NewGame;
