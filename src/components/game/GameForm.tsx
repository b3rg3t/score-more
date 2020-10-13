import React, { useContext } from "react";
import CreatePlayer from "./CreatePlayers";

import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../store/contexts/mainContext";
import PlayerList from "./PlayerList";

const GameForm = () => {
  const { state, dispatch } = useContext(GlobalContext);

  console.log(state);
  const onSubmit = () => {
    const id = uuidv4();
    const newGame = {
      ...state.game,
      round: [
        {
          id,
          round: 0,
          playerScore: state.game.players.map((player) => {
            return {
              pId: "",
              score: 0,
              name: "berit",
            };
          }),
        },
      ],
    };

    console.log(newGame);
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="d-flex mb-2">
        <input
          name="title"
          className="form-control"
          type="text"
          onChange={(e) =>
            dispatch({ type: "SET_TITLE", payload: { value: e.target.value } })
          }
          value={state.game.title}
          placeholder="Name of the game.."
        />
      </div>
      <div className="d-flex mb-2">
        <CreatePlayer />
      </div>

      <div className="d-flex justify-content-center mb-2">
        <button className="btn btn-dark btn-sm">Start game</button>
      </div>
    </form>
  );
};

export default GameForm;
