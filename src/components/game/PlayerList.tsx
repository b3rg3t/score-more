import React, { useEffect, useState } from "react";
import PlayerItem from "./PlayerItem";

const PlayerList = ({ game }: any) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (game?.players) {
      setPlayers(game.players);
    }
  }, [game]);

  return (
    <ul className="list-unstyled overflow-auto m-0">
      {players?.length ? (
        players.map((player: any) => {
          return <PlayerItem player={player} />;
        })
      ) : (
        <li className="d-flex justify-content-center align-items-center flex-column">
          <code>Couldn't find game</code>
        </li>
      )}
    </ul>
  );
};

export default PlayerList;
