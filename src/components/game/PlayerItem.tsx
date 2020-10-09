import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const PlayerItem = () => {
  const [counter, setCounter] = useState(0);

  return (
    <li className="box-shadow rounded p-3 d-flex justify-content-between">
      <div className="d-flex align-items-center">Name</div>
      <div className="d-flex">
        <button
          className="btn btn-dark btn-sm d-flex align-items-center justify-content-center rounded-circle"
          onClick={() => setCounter((prevState) => prevState - 1)}
          style={{ width: "34px", height: "34px" }}
        >
          <FaMinus size="1rem" />
        </button>
        <span className="mx-2 d-flex align-items-center">{counter}</span>
        <button
          className="btn btn-dark btn-sm d-flex align-items-center justify-content-center rounded-circle"
          onClick={() => setCounter((prevState) => prevState + 1)}
          style={{ width: "34px", height: "34px" }}
        >
          <FaPlus />
        </button>
      </div>
    </li>
  );
};

export default PlayerItem;
