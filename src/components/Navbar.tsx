import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { FaGamepad, FaHome, FaPlus } from "react-icons/fa";
import { GlobalContext } from "../store/contexts/mainContext";

const Navbar = () => {
  const { state } = useContext(GlobalContext);
  return (
    <nav className="main-shadow w-100 bg-dark">
      <ul className="list-unstyled d-flex justify-content-between align-items-center py-0 px-1 m-0">
        <li className="p-1">
          <Link to="/" className="text-white btn btn-dark p-1 m-0 d-flex justify-content-center align-items-center">
            <FaHome size="1.2rem" />
          </Link>
        </li>
        <li className="p-1">
          <Link to="/newgame" className="text-white btn btn-dark p-1 m-0 d-flex justify-content-center align-items-center">
            <FaPlus size="1rem" />
          </Link>
        </li>
        {state.activeGame.id ? (
          <li className="p-1">
            <Link
              to={`/activegame/${state.activeGame.id}`}
              className="text-white btn btn-dark p-1 m-0 d-flex justify-content-center align-items-center"
            >
              <FaGamepad size="1.4rem" />
            </Link>
          </li>
        ) : (
          <li style={{width: "34px"}}></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
