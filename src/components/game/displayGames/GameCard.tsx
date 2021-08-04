import React, { useState, useRef, useContext } from "react";
import { FaChevronRight, FaCog, FaEllipsisV, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../../store/contexts/mainContext";
import { GET_STORAGE, SET_STORAGE } from "../../utils/localStorage";
import DropDownMenu from "../../utils/DropDownMenu";
import { useOutsideClick } from "../../utils/customHooks";

const GameCard = ({ game }: any) => {
  const { dispatch } = useContext(GlobalContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const setActiveGame = () => {
    const games = GET_STORAGE("games");
    dispatch({ type: "SET_ACTIVE_ID", payload: { value: game.id } });
    if (games) {
      SET_STORAGE({ ...games, activeGame: game.id }, "games");
    }
  };

  const menuRef = useRef(null);

  useOutsideClick(menuRef, () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  });

  const onClickDeleteButton = () => {
    setIsMenuOpen(false);
  };

  return (
    <li className={`box-shadow p-2 d-flex justify-content-between rounded mb-2 ${!game.isActive ? "bg-light" : ""}`}>
      <div className="d-flex justify-content-center align-items-center position-relative">
        <button
          onClick={() =>
            setIsMenuOpen((prevState) => (prevState ? false : true))
          }
          className="btn btn-link btn-sm rounded-circle mr-2 d-flex align-items-center"
          style={{ height: "32px" }}
        >
          <FaEllipsisV color="gray" />
        </button>
        {isMenuOpen && (
          <DropDownMenu positionX="left" menuRef={menuRef}>
            <ul className="list-unstyled ">
              <li
                className="game-card px-3 py-2 d-flex align-items-center rounded"
                onClick={() => onClickDeleteButton()}
              >
                <FaTrashAlt className="pr-1" color="red"/>
                <span className="ml-1">Delete</span>
              </li>
              <li className="game-card px-3 py-2 d-flex align-items-center rounded">
                <FaCog className="pr-1" color="gray" />
                <span className="ml-1">Settings</span>
              </li>
            </ul>
          </DropDownMenu>
        )}
      </div>

      <div className="d-flex w-100 flex-column ">
        <Link
          to={`/game/${game.id}/${game.activeRound.id}`}
          onClick={() =>
            dispatch({ type: "SET_ACTIVE_ID", payload: { value: game.id } })
          }
        >
          <h5 className="card-title mb-1">
            <code className={`${game.isActive ? "" : "text-muted"}`}>{game.title}</code>
          </h5>
        </Link>
        <div className="d-flex justify-content-between pr-2">
          <p className="m-0 text-muted">Players: {game.players.length}</p>
          <p className="m-0 text-muted">Rounds: {game.round.length}</p>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Link to={`/activegame/${game.id}/${game.activeRound.id}`}>
          <button
            className="btn btn-link round d-flex align-items-center"
            onClick={() => setActiveGame()}
          >
            <FaChevronRight />
          </button>
        </Link>
      </div>
    </li>
  );
};

export default GameCard;
