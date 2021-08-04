import React from "react";
import DisplayPlayers from "../game/createGame/DisplayPlayers";
import GameForm from "../game/createGame/GameForm";

const NewGame = () => {
  return (
    <section className="px-2">
        <div className="pl-2 mb-2 border-bottom d-flex justify-content-center align-items-center">
          <h5 className="mb-0 py-1">
            Create new game
          </h5>

        </div>
      <GameForm />
      <DisplayPlayers />
    </section>
  );
};

export default NewGame;
