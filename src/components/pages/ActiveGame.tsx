import React from "react";

import PlayerList from "../game/PlayerList";

const ActiveGame = ({ match }: any) => {
  const {
    params: { id },
  } = match;

  console.log(id);
  return (
    <section className="m-2 d-flex flex-column">
      <h1 className="text-center">Dynamic route <code>{id}</code></h1>
      <PlayerList />
    </section>
  );
};

export default ActiveGame;
