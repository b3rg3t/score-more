import React, { useState, useEffect } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaCog,
  FaFlagCheckered,
} from "react-icons/fa";
import Footer from "../Footer";

import PlayerList from "../game/activeGame/PlayerList";
import Loader from "../Loader";
import { GET_STORAGE } from "../utils/localStorage";

const ActiveGame = ({ match }: any) => {
  const [game, setGame] = useState({} as any);
  const [isLoading, setIsLoading] = useState(true)
  const {
    params: { id },
  } = match;

  useEffect(() => {
    const getGame = GET_STORAGE(id);
    setGame(getGame);
    setIsLoading(false)
    // eslint-disable-next-line
  }, []);

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <section className="player-list overflow-auto">
      <section className="player-list-section ">
        <header className="d-flex justify-content-between align-items-center px-2 mt-1">
          <h5 className="text-center mb-0 w-100">
            <code>{game?.title}</code>
          </h5>
        </header>
        <div className="d-flex justify-content-between align-items-center px-2 mt-1">
          <span
            className="box-shadow bg-dark text-white border-dark rounded d-flex align-items-center justify-content-center px-3 mr-1"
            style={{ height: "24px" }}
          >
            <small className="font-weight-bold">Round: {game?.round?.length}</small>
          </span>
          <button
            title="Finish game"
            className="box-shadow btn btn-outline-dark btn-sm d-flex justify-content-center align-items-center"
          >
            <FaFlagCheckered />
          </button>
        </div>

        <PlayerList game={game} />
      </section>
      <Footer styling={"bg-dark p-1 player-list-footer top-shadow"}>
        <nav className="text-white">
          <ul className="list-unstyled d-flex m-0 justify-content-between">
            {game?.round?.length > 1 ? (
              <li>
                <button className="btn btn-dark p-1 m-0 d-flex justify-content-center align-items-center">
                  <FaChevronLeft size="1.2rem" />
                </button>
              </li>
            ) : (
                <li style={{ width: "29.2px" }}></li>
              )}

            <li>
              <button className="btn btn-dark p-1 m-0 d-flex justify-content-center align-items-center">
                <FaCog size="1.2rem" />
              </button>
            </li>
            <li>
              <button className="btn btn-dark p-1 m-0 d-flex justify-content-center align-items-center">
                <FaChevronRight size="1.2rem" />
              </button>
            </li>
          </ul>
        </nav>
      </Footer>
    </section>
  );
};

export default ActiveGame;
