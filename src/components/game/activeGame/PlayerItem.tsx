import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const PlayerItem = ({ player, register }: any) => {
  const [counter, setCounter] = useState(0);

  return (
    <li className="box-shadow rounded mb-2 p-2 d-flex justify-content-between">

      <div className="d-flex align-items-center">
        <img
          className="rounded-circle border border-secondary mr-1"
          width="42px" height="42px"
          alt="img of profile"
          src={`https://api.adorable.io/avatars/40/${player.id ? player.id : player.value
            }.png`}
        />
        <span>{player.label}</span>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-dark btn-sm d-flex align-items-center justify-content-center rounded-circle"
          onClick={() => setCounter((prevState) => prevState - 1)}
          style={{ width: "26px", height: "26px" }}
        >
          <FaMinus size="1rem" />
        </button>
        <input
          type="number"
          defaultValue={counter}
          name={player.value}
          ref={register()}
          hidden
        />
        <span className="mx-2 d-flex align-items-center">{counter}</span>
        <button
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
