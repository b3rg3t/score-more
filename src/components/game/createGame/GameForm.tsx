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

  const addToGameStorage = (newGame: any, gId: string) => {
    const games = GET_STORAGE("games");
    if (games) {
      SET_STORAGE(
        { gameIds: [...games.gameIds, newGame], activeGame: gId },
        "games"
      );
    } else {
      SET_STORAGE({ gameIds: [newGame], activeGame: gId }, "games");
    }
  };

  const addNewPlayerItem = (value: any) => {
    const users = GET_STORAGE("players");

    if (users.players) {
      const checkedList = users.players.filter((player: any) => {
        return player.value !== value.value;
      });
      SET_STORAGE({ players: [...checkedList, value] }, "players");
    }
  };

  const updatePlayer = (value: string, games: any) => {
    const users = GET_STORAGE("players");
    if (users.players) {
      const newUserList = users.players.filter((player: any) => {
        return player.value !== value;
      });
      const specificUser = users.players.find((player: any) => {
        return player.value === value;
      });
      if (specificUser) {
        const updatedUser = {
          ...specificUser,
          value: specificUser.value,
          games,
        };
        newUserList.push(updatedUser);
        SET_STORAGE({ players: newUserList }, "players");
      }
    }
  };

  const addPlayerToPlayerList = (players: any) => {
    const activePlayers = GET_STORAGE("players");
    if (activePlayers?.players) {
      let exisingPlayers: any = [];

      activePlayers.players.forEach((playerA: any) => {
        players.players.forEach((playerB: any) => {
          if (playerB.value === playerA.value) {
            exisingPlayers.push({
              ...playerA,
              games: [...playerA.games, ...playerB.games],
            });
          } else {
            addNewPlayerItem(playerA);
            addNewPlayerItem(playerB);
          }
        });
      });

      if (exisingPlayers) {
        exisingPlayers.forEach((player: any) => {
          updatePlayer(player.value, player.games);
        });
      }
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
      round: [
        {
          id,
          round: 1,
          playerScore: state.game.players.map((player) => {
            return {
              pId: player.value,
              score: 0,
            };
          }),
        },
      ],
    };
    addToGameStorage(newGame, gId);
    addPlayerToPlayerList(players);
    dispatch({ type: "SET_GAME_INITIALSTATE" });
    dispatch({ type: "SET_ACTIVE_ID", payload: { value: gId } });
    history.push(`activegame/${gId}`);
  };

  return (
    <form
      className="d-flex justify-content-center"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <div className="d-flex mb-2">
          <input
            name="title"
            className="form-control"
            type="text"
            onChange={(e) =>
              dispatch({
                type: "SET_TITLE",
                payload: { value: e.target.value },
              })
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
      </div>
    </form>
  );
};

export default GameForm;
