import React from "react";
import CreateNewGame from "../game/CreateNewGame";

const ActiveGame = ({ match }: any) => {
  const {
    params: { id },
  } = match;

  console.log(id);
  return (
    <section className="m-2 d-flex flex-column">
      <h1>Dynamic route</h1>
      {id}
      <CreateNewGame />
    </section>
  );
};

export default ActiveGame;
