import React from "react";
import DisplayGithub from "../displayProfile/DisplayGithub";
import GameList from "../game/displayGames/GameList";

const Home = (): React.ReactElement => (
  <section className="p-2 overflow-auto h-100 d-flex flex-column">
    <header className="home-header d-flex justify-content-between align-items-center w-100 mb-2">
      <h4 className="text-center w-100 mb-0">Home</h4>
    </header>
    <GameList />
    <DisplayGithub />
  </section>
);

export default Home;
