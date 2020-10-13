import React from "react";
import { FaChevronRight } from "react-icons/fa";

const GameCard = ({ game }: any) => (
  <li className="box-shadow p-2 d-flex justify-content-between rounded">
    <div className="d-flex flex-column w-100">
      <h4 className="card-title mb-1">{game.title}</h4>
      <p className="m-0 text-muted">Players: {game.players.length}</p>
    </div>
    <div className="d-flex justify-content-between align-items-center">
      <button className="btn btn-link round d-flex align-items-center">
        <FaChevronRight></FaChevronRight>
      </button>
    </div>
  </li>
);

export default GameCard;
