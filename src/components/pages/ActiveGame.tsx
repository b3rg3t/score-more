import React from "react";
import { FaChevronLeft, FaChevronRight, FaCog } from "react-icons/fa";
import Footer from "../Footer";

import PlayerList from "../game/PlayerList";

const ActiveGame = ({ match }: any) => {
  const {
    params: { id },
  } = match;

  console.log(id);
  return (
    <section className="player-list d-flex flex-column justify-content-between">
      <section className="p-2">
        <h1 className="text-center">
          Dynamic route <code>{id}</code>
        </h1>
        <PlayerList />
      </section>
      <Footer styling={"bg-dark p-2"}>
        <nav className="text-white">
          <ul className="list-unstyled d-flex m-0 justify-content-between">
            <li>
              <FaChevronLeft size="1.5rem" />
            </li>
            <li>
              <FaCog size="1.5rem" />
            </li>
            <li>
              <FaChevronRight size="1.5rem" />
            </li>
          </ul>
        </nav>
      </Footer>
    </section>
  );
};

export default ActiveGame;
