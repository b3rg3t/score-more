import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "../src/components/pages/Home";
import NewGame from "../src/components/pages/NewGame";
import ActiveGame from "../src/components/pages/ActiveGame";

import "./App.scss";

import { GlobalProvider } from "./store/contexts/mainContext";

function App() {
  return (
    <GlobalProvider>
      <main className="main-content d-flex flex-column">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/newgame" component={NewGame} />
            <Route exact path="/activegame/:id" component={ActiveGame} />
          </Switch>
        </Router>
      </main>
    </GlobalProvider>
  );
}

export default App;
