import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCog,
  FaFlagCheckered,
} from "react-icons/fa";
import Footer from "../Footer";

import PlayerList from "../game/PlayerList";
import { GET_STORAGE } from "../utils/localStorage";

const ActiveGame = ({ match }: any) => {
  const [game, setGame] = useState({} as any);
  const {
    params: { id },
  } = match;

  useEffect(() => {
    const getGame = GET_STORAGE(id);
    setGame(getGame);
    // eslint-disable-next-line
  }, []);
  console.log(game);
  return (
    <section className="player-list overflow-auto">
      <section className="player-list-section ">
        <header className="d-flex justify-content-between align-items-center px-2 my-1">
          <span
            className="box-shadow bg-dark text-white border-dark rounded d-flex align-items-center justify-content-center px-3"
            style={{ height: "30px" }}
          >
            <small className="font-weight-bold">{game?.round?.length}</small>
          </span>
          <h3 className="text-center mb-0">
            <code>{game?.title}</code>
          </h3>
          <button title="Finish game" className="box-shadow btn btn-outline-dark d-flex justify-content-center align-items-center">
            <FaFlagCheckered />
          </button>
        </header>

        <PlayerList game={game} />
      </section>
      <Footer styling={"bg-dark p-2 player-list-footer top-shadow"}>
        <nav className="text-white">
          <ul className="list-unstyled d-flex m-0 justify-content-between">
            <li>
              <FaChevronLeft size="1.2rem" />
            </li>
            <li>
              <FaCog size="1.2rem" />
            </li>
            <li>
              <FaChevronRight size="1.2rem" />
            </li>
          </ul>
        </nav>
      </Footer>
    </section>
  );
};

export default ActiveGame;
