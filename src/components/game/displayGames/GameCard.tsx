import React, { useContext } from "react";
import { FaChevronRight, FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../store/contexts/mainContext";

const GameCard = ({ game }: any) => {
  const { dispatch } = useContext(GlobalContext);
  return (
    <li className="box-shadow p-2 d-flex justify-content-between rounded mb-2">
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-link btn-sm rounded-circle mr-2 d-flex align-items-center"
          style={{ height: "32px" }}
        >
          <FaEllipsisV color="gray" />
        </button>
      </div>

      <div className="d-flex w-100 flex-column ">
        <h5 className="card-title mb-1">{game.title}</h5>
        <p className="m-0 text-muted">Players: {game.players.length}</p>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Link to={`/activegame/${game.id}`}>
          <button
            className="btn btn-link round d-flex align-items-center"
            onClick={() =>
              dispatch({ type: "SET_ACTIVE_ID", payload: { value: game.id } })
            }
          >
            <FaChevronRight />
          </button>
        </Link>
      </div>
    </li>
  );
};

export default GameCard;
