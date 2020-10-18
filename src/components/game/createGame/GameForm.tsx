import React, { useContext } from "react";
import CreatePlayer from "./CreatePlayers";

import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../../store/contexts/mainContext";
import { GET_STORAGE, SET_STORAGE } from "../../utils/localStorage";

import { useHistory } from "react-router-dom";

const GameForm = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const history = useHistory();
  const gId = uuidv4();

  const addToGameStorage = () => {
    const games = GET_STORAGE("games");
    if (games) {
      SET_STORAGE({ gameIds: [...games.gameIds, gId] }, "games");
    } else {
      SET_STORAGE({ gameIds: [gId] }, "games");
    }
  };

  const onSubmit = () => {
    const id = uuidv4();

    addToGameStorage();
    const newGame = {
      ...state.game,
      players: state.game.players,
      id: gId,
      isActive: true,
      activeRound: {
        id,
        round: 0,
        playerScore: state.game.players.map((player) => {
          return {
            pId: player.value,
            score: 0,
          };
        }),
      },
      round: [
        {
          id,
          round: 0,
          playerScore: state.game.players.map((player) => {
            return {
              pId: player.value,
              score: 0,
            };
          }),
        },
      ],
    };
    SET_STORAGE(newGame, gId);
    dispatch({ type: "SET_GAME_INITIALSTATE" });
    dispatch({ type: "CLEAR_PLAYERS" });
    dispatch({ type: "SET_ACTIVE_ID", payload: { value: gId } });
    history.push(`activegame/${gId}`);
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

      <div className="d-flex w-100 mb-2">
        <button className="btn btn-dark btn-sm w-100">Start game</button>
      </div>
    </form>
  );
};

export default GameForm;
