import React from "react";
import DisplayPlayers from "../game/DisplayPlayers";
import GameForm from "../game/GameForm";

const NewGame = () => {
  return (
    <section className="p-2">
      <h3 className="text-center">Create a new game</h3>
      <GameForm />
      <DisplayPlayers />
    </section>
  );
};

export default NewGame;
