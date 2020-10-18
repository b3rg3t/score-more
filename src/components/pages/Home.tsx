import React, { useEffect, useState } from "react";

import { FaInfo } from "react-icons/fa";
import GithubProfile from "../GithubProfile";
import GameList from "../game/GameList";
import { GET_STORAGE } from "../utils/localStorage";

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const storageGames = GET_STORAGE("games");
    if (storageGames) {
      setGames(storageGames.gameIds);
    }
  }, []);

  return (
    <section className="p-2 overflow-auto">
      <header className="home-header d-flex justify-content-between align-items-center w-100 mb-2">
        <h4 className="text-center w-100 mb-0">Home</h4>
        <button
          className="box-shadow d-flex align-items-center btn btn-info rounded-circle"
          onClick={() => setShowProfile(showProfile ? false : true)}
          style={{ width: "30px", height: "30px" }}
        >
          <FaInfo size="0.8rem" />
        </button>
      </header>
      {showProfile ? <GithubProfile /> : null}
      {games ? <GameList games={games}/> : ""}
    </section>
  );
};

export default Home;
