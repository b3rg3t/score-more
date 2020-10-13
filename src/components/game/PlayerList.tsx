import React, { useEffect, useState } from "react";
import PlayerItem from "./PlayerItem";

const PlayerList = ({ game }: any) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(game.players);
  });

  return (
    <ul className="list-unstyled overflow-auto m-0">
      {players?.length
        ? players.map((player: any) => {
            return <PlayerItem player={player} />;
          })
        : null}
    </ul>
  );
};

export default PlayerList;
