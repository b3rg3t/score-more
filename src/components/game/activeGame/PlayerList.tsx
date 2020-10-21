import React, { useState } from "react";

import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import PlayerItem from "./PlayerItem";
import { SET_STORAGE } from "../../utils/localStorage";

const PlayerList = ({ activeGame, updateListCallback }: any) => {
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {},
  });
  const [game] = useState(activeGame);
  const [players] = useState(activeGame.activeRound.playerScore);
  const [update, setUpdate] = useState(false);


  const handleChange = () => {
    setUpdate((prevState) => (prevState ? false : true));
  };

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
    updateListCallback();
    handleChange();
  };

  const watcher = watch();


  console.log(watcher);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul className="list-unstyled overflow-auto p-2">
        {players?.length ? (
          players.map((player: any) => {
            return (
              <PlayerItem
                key={player.pId}
                player={game.players.find(({ pId }: any) => pId === player.pId)}
                score={player.score}
                register={register}
                reset={reset}
                watch={watch}
                update={update}
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
};

export default PlayerList;
