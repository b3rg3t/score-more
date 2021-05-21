import React from "react";
import DisplayPlayers from "../game/createGame/DisplayPlayers";
import GameForm from "../game/createGame/GameForm";

const NewGame = () => {
  return (
    <section className="p-2">
      <h4 className="text-center">
        <code>Create a new game</code>
      </h4>
      <GameForm />
      <DisplayPlayers />
    </section>
  );
};

export default NewGame;
