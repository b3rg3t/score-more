import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaCog } from "react-icons/fa";
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

  return (
    <section className="player-list overflow-auto">
      <section className="player-list-section p-2 ">
        <h3 className="text-center">
          <code>{game?.title}</code>
        </h3>
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
