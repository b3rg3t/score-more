import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { FaGamepad, FaHome, FaPlus } from "react-icons/fa";
import { GlobalContext } from "../store/contexts/mainContext";

const Navbar = () => {
  const { state } = useContext(GlobalContext);
  return (
    <nav className="main-shadow w-100 bg-dark">
      <ul className="list-unstyled d-flex justify-content-between py-1 px-2 m-0">
        <li className="p-1">
          <Link to="/" className="text-white">
            <FaHome size="1.2rem" />
          </Link>
        </li>
        <li className="p-1">
          <Link to="/newgame" className="text-white">
            <FaPlus size="1rem" />
          </Link>
        </li>
        {state.activeGame.id ? (
          <li className="p-1">
            <Link
              to={`/activegame/${state.activeGame.id}`}
              className="text-white"
            >
              <FaGamepad size="1.4rem" />
            </Link>
          </li>
        ) : (
          <li></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
