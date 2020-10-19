import React, { useState, useEffect } from "react";

import PlayerItem from "./PlayerItem";
import { useForm } from "react-hook-form";
import Loader from "../../Loader";
import { v4 as uuidv4 } from "uuid";
import { SET_STORAGE } from "../../utils/localStorage";

const PlayerList = ({ game, updateRoundCallback }: any) => {
  const { register, handleSubmit, reset, watch } = useForm();
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(game.activeRound)

  useEffect(() => {
    if (game.activeRound.playerScore) {
      setPlayers(game.activeRound.playerScore);
      setIsLoading(false);
    }
  }, [game.activeRound.playerScore]);

  const onSubmit = (data: any) => {
    const setScoreToRound = {
      id: uuidv4(),
      round: game.activeRound.round + 1,
      playerScore: Object.keys(data).map((item) => {
        return {
          pId: item,
          score: parseInt(data[item]),
        };
      }),
    };

    const newRound = {
      ...game,
      round: [...game.round, setScoreToRound],
      activeRound: {
        id: uuidv4(),
        round: game.activeRound.round + 1,
        playerScore: Object.keys(data).map((item) => {
          return {
            pId: item,
            score: 0,
          };
        }),
      },
    };

    SET_STORAGE(newRound, game.id);
    updateRoundCallback();
  };

  const watcher = watch()

  console.log(watcher)

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul className="list-unstyled overflow-auto p-2">
          {players?.length ? (
            players.map((player: any) => {
              return (
                <PlayerItem
                  key={player.pId}
                  player={game.players.find(
                    ({ pId }: any) => pId === player.pId
                  )}
                  score={player.score}
                  register={register}
                  reset={reset}
                />
              );
            })
          ) : (
            <li className="d-flex justify-content-center align-items-center flex-column">
              <code>Couldn't find game</code>
            </li>
          )}
        </ul>
        <div className="d-flex justify-content-center">
          <button className="btn btn-dark" type="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
};

export default PlayerList;
