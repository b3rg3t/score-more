import React, { useState, useMemo } from "react";

import PlayerItem from "./PlayerItem";
import { useForm } from "react-hook-form";
import Loader from "../../Loader";
import { v4 as uuidv4 } from "uuid";
import { SET_STORAGE } from "../../utils/localStorage";

const PlayerList = ({ game }: any) => {
  const { register, handleSubmit } = useForm();
  const [players, setPlayers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useMemo(() => {
    if (game.activeRound.playerScore) {
      setPlayers(game.activeRound.playerScore);
      setIsLoading(false);
      console.log(game.activeRound.playerScore);
    }
  }, [game.activeRound.playerScore]);

  const onSubmit = (data: any) => {
    console.log(data)
    const newActiveRound = {
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
      round: [...game.round, newActiveRound],
      activeRound: newActiveRound,
    };

    SET_STORAGE(newRound, game.id);
  };

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
