import React, { useEffect, useState } from "react";
import PlayerItem from "./PlayerItem";
import { useForm } from "react-hook-form";

const PlayerList = ({ game }: any) => {
  const { register, handleSubmit, watch } = useForm();
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (game?.players) {
      setPlayers(game.players);
    }
  }, [game]);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const watchPlayerScore = watch();

  console.log(watchPlayerScore);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ul className="list-unstyled overflow-auto p-2">
        {players?.length ? (
          players.map((player: any) => {
            return (
              <PlayerItem
                key={player.value}
                player={player}
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
};

export default PlayerList;
