import React, { useState, useContext, useEffect } from "react";

import { Link } from "react-router-dom";
import {
  FaAccessibleIcon,
  FaGamepad,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import { GlobalContext } from "../store/contexts/mainContext";
import { GET_STORAGE } from "./utils/localStorage";
import BurgerMenu from "./hamburgerMenu/BurgerMenu";

const Navbar = () => {
  const { state } = useContext(GlobalContext);
  const [gameLabel, setGameLabel] = useState(null as any);

  useEffect(() => {
    const activeGame = GET_STORAGE(state.activeGame.id);
    if (activeGame) {
      setGameLabel(activeGame.title);
    }
  }, [state.activeGame]);

  return (
    <nav className="main-shadow w-100 bg-dark position-relative">
      <BurgerMenu />
      <ul className="list-unstyled d-flex justify-content-between align-items-center py-0 px-1 m-0">
        <div className="d-flex align-items-center">
          <li className="p-1">
            <Link
              to="/"
              className="text-white btn btn-dark p-1 m-0 d-flex justify-content-center align-items-center"
            >
              <FaHome size="1.2rem" />
            </Link>
          </li>
          <li style={{ width: "34px" }}>
            <Link
              to={`/swiper`}
              className="text-white btn btn-dark p-1 m-0 d-flex justify-content-center align-items-center"
            >
              <FaAccessibleIcon size="1.2rem"/>
            </Link>
          </li>
        </div>
        <li className="p-1">
          {gameLabel ? (
            <Link
              to={`/activegame/${state.activeGame.id}`}
              className="p-1 m-0 d-flex justify-content-center align-items-center neon"
            >
              <FaGamepad
                size="1.4rem"
                className="mr-1"
                color="rgb(255, 0, 221)"
              />
              <code className="neon">{gameLabel}</code>
            </Link>
          ) : (
            ""
          )}
        </li>
        <div className="d-flex align-items-center">
          <li className="mr-1" style={{ width: "34px" }}>
            <Link
              to={`/userlist`}
              className="text-white btn btn-dark p-1 m-0 d-flex justify-content-center align-items-center"
            >
              <FaUsers size="1.2rem"/>
            </Link>
          </li>
          <li style={{ width: "34px" }}>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
