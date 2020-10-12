import React, { useState, useContext } from "react";
import CreatePlayer from "./CreatePlayers";
import { GlobalContext } from "../../store/contexts/mainContext";

const GameForm = () => {
  const { state, dispatch } = useContext(GlobalContext);

  console.log(state);
  const onSubmit = () => {
    console.log("submit");
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        name="title"
        className="form-control"
        type="text"
        onChange={(e) =>
          dispatch({ type: "SET_TITLE", payload: { value: e.target.value } })
        }
        value={state.game.title}
        placeholder="Name of the game.."
      />
      <CreatePlayer />

      <div className="d-flex justify-content-center">
        <button className="btn btn-dark btn-sm">Start</button>
      </div>
    </form>
  );
};

export default GameForm;
