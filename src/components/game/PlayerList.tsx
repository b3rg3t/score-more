import React from "react";
import PlayerItem from "./PlayerItem";

const PlayerList = () => {
  return (
      <ul className="list-unstyled overflow-auto m-0">
        <PlayerItem />
        <PlayerItem />
        <PlayerItem />
        <PlayerItem /> 
        <PlayerItem />
        <PlayerItem /> 
      </ul>
  );
};

export default PlayerList;
