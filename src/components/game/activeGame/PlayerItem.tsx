import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const PlayerItem = ({ player, register, score }: any) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(score);
  }, [score]);

  return (
    <li className="box-shadow rounded mb-2 p-2 d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <img
          className="rounded-circle border border-secondary mr-1"
          width="42px"
          height="42px"
          alt="img of profile"
          src={`https://api.adorable.io/avatars/40/${
            player.pId ? player.pId : player.label
          }.png`}
        />
        <span>{player.label}</span>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn btn-dark btn-sm d-flex align-items-center justify-content-center rounded-circle"
          onClick={() => setCounter((prevState: number) => prevState - 1)}
          style={{ width: "26px", height: "26px" }}
        >
          <FaMinus size="1rem" />
        </button>
        <input
          type="number"
          name={player.pId}
          value={counter}
          onChange={() => counter}
          hidden
          ref={register()}
        />
        <span className="mx-2 d-flex align-items-center">{counter}</span>
        <button
          type="button"
          className="btn btn-dark btn-sm d-flex align-items-center justify-content-center rounded-circle"
          onClick={() => setCounter((prevState) => prevState + 1)}
          style={{ width: "26px", height: "26px" }}
        >
          <FaPlus />
        </button>
      </div>
    </li>
  );
};

export default PlayerItem;
