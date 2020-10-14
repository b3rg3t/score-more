import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const GameCard = ({ game }: any) => (
  <li className="box-shadow p-2 d-flex justify-content-between rounded mb-2">
    <div className="d-flex flex-column w-100">
      <h5 className="card-title mb-1">{game.title}</h5>
      <p className="m-0 text-muted">Players: {game.players.length}</p>
    </div>
    <div className="d-flex justify-content-between align-items-center">
      <Link to={`/activegame/${game.id}`}>
        <a className="btn btn-link round d-flex align-items-center">
          <FaChevronRight></FaChevronRight>
        </a>
      </Link>
    </div>
  </li>
);

export default GameCard;
