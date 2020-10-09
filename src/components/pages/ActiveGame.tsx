import React from "react";
import CreateNewGame from "../game/CreateNewGame";

const ActiveGame = ({ match }: any) => {
  const {
    params: { id },
  } = match;

  console.log(id);
  return (
    <section>
      <h1>Dynamic route</h1>
      {id}
      <CreateNewGame />
    </section>
  );
};

export default ActiveGame;
