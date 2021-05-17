import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "../src/components/pages/Home";
import NewGame from "../src/components/pages/NewGame";
import Game from "./components/pages/Game";

import "./App.scss";

import { GlobalProvider } from "./store/contexts/mainContext";
import Swiper from "./components/pages/Swiper";

function App() {
  return (
    <GlobalProvider>
      <main className="main-content d-flex flex-column">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/newgame" component={NewGame} />
            <Route exact path="/activegame/:id" component={Game} />
            <Route exact path="/activegame/:id/:gameId" component={Game} />
            <Route exact path="/swiper" component={Swiper} />
          </Switch>
        </Router>
      </main>
    </GlobalProvider>
  );
}

export default App;
