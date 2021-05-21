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

  const addPlayerToPlayerList = (players: any) => {
    const activePlayers = GET_STORAGE("players");
    if (activePlayers?.players) {
      let exisingPlayers: any = [];
      let newPlayers: any = [];

      players.players.forEach((playerB: any) => {
        activePlayers.players.forEach((playerA: any) => {
          if (playerB.value === playerA.value) {
            exisingPlayers.push(playerA);
          }
        });
      });

      console.log({exisingPlayers, newPlayers});
      const populatePlayerList = {
        players: [...activePlayers.players, ...players.players],
      };
      // SET_STORAGE(populatePlayerList, "players");
    } else {
      SET_STORAGE(players, "players");
    }
  };

  const onSubmit = () => {
    const id = uuidv4();

    const players = {
      players: state.game.players.map((player) => {
        return {
          value: player.value,
          label: player.label,
          games: [{ id: gId }],
        };
      }),
    };

    addToGameStorage();
    const newGame = {
      ...state.game,
      players: state.game.players.map((player) => {
        return {
          pId: player.value,
          label: player.label,
          games: [{ id: gId }],
        };
      }),
      id: gId,
      isActive: true,
      activeRound: {
        id,
        round: 1,
        playerScore: state.game.players.map((player) => {
          return {
            pId: player.value,
            score: 0,
          };
        }),
      },
      round: [],
    };
    SET_STORAGE(newGame, gId);
    addPlayerToPlayerList(players);
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
