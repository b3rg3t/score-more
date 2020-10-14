import React, { useContext } from "react";
import CreatePlayer from "./CreatePlayers";

import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../store/contexts/mainContext";
import { GET_STORAGE, SET_STORAGE } from "../utils/localStorage";

import { useHistory } from "react-router-dom";

const GameForm = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const history = useHistory();

  const addToGameStorage = () => {
    const games = GET_STORAGE("games");
    console.log(games);
    if (games) {
      SET_STORAGE({ gameIds: [...games.gameIds, state.game.id] }, "games");
    } else {
      SET_STORAGE({ gameIds: [state.game.id] }, "games");
    }
  };

  const onSubmit = () => {
    const id = uuidv4();
    addToGameStorage();
    const newGame = {
      ...state.game,
      players: state.users,
      round: [
        {
          id,
          round: 0,
          playerScore: state.users.map((user) => {
            return {
              pId: user.value,
              score: 0,
            };
          }),
        },
      ],
    };
    SET_STORAGE(newGame, state.game.id);
    dispatch({ type: "SET_INITIALSTATE" });
    history.push(`activegame/${state.game.id}`);
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
