import React from "react";
import DisplayPlayers from "../game/createGame/DisplayPlayers";
import GameForm from "../game/createGame/GameForm";

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
