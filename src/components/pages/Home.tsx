import React, { useEffect, useState } from "react";

import { FaInfo } from "react-icons/fa";
import GameCard from "../game/GameCard";
import GithubProfile from "../GithubProfile";
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

  const DisplayGamesFromStorage = (): React.ReactElement => {
    const fetchedGames = games.map((game) => {
      const allGames = GET_STORAGE(game);
      if (allGames) {
        return allGames;
      }
      return null;
    });
    if (fetchedGames.length) {
      return (
        <ul className="list-unstyled">
          {fetchedGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </ul>
      );
    } else {
      return <></>;
    }
  };

  return (
    <section className="p-2 overflow-auto">
      <header className="d-flex justify-content-between align-items-center w-100 mb-2">
        <h3 className="text-center w-100 mb-0">Home</h3>
        <button
          className="box-shadow d-flex align-items-center btn btn-info rounded-circle"
          onClick={() => setShowProfile(showProfile ? false : true)}
          style={{ width: "30px", height: "30px" }}
        >
          <FaInfo size="0.8rem" />
        </button>
      </header>
      {showProfile ? <GithubProfile /> : null}
      {games && <DisplayGamesFromStorage />}
    </section>
  );
};

export default Home;
