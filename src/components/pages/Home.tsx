import React, { useState } from "react";
import { FaInfo } from "react-icons/fa";
import DisplayActiveGames from "../game/GameList";
import GithubProfile from "../GithubProfile";

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);

  return (
    <section className="p-2">
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
      <DisplayActiveGames />
    </section>
  );
};

export default Home;
