import React, { useState, useContext } from "react";
import { FaInfo } from "react-icons/fa";
import { GlobalContext } from "../../store/contexts/mainContext";
import DisplayActiveGames from "../game/GameList";
import GithubProfile from "../GithubProfile";
// import Loader from "../Loader"

const Home = () => {
  const [showProfile, setShowProfile] = useState(false);
  const { state } = useContext(GlobalContext);
  console.log(state);
  return (
    <section className="p-2">
      <header className="d-flex justify-content-between align-items-center w-100 ">
        <h1 className="text-center w-100">Home</h1>
        <button
          className="box-shadow d-flex align-items-center btn btn-info rounded-circle"
          onClick={() => setShowProfile(showProfile ? false : true)}
          style={{width: "30px", height: "30px"}}
        >
          <FaInfo size="0.8rem"/>
        </button>
      </header>
      {showProfile ? <GithubProfile /> : null}

      {/* {state.data.activeGame.length > 0 ? <DisplayActiveGames /> : <Loader />} */}
      <DisplayActiveGames />
    </section>
  );
};

export default Home;
