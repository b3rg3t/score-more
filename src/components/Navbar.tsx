import React from "react";
import { Link } from "react-router-dom";
import { FaGamepad, FaHome, FaUserAlt } from "react-icons/fa";

const Navbar = () => (
  <nav className="main-shadow w-100 bg-dark">
    <ul className="list-unstyled d-flex justify-content-between py-1 px-2 m-0">
      <li className="p-1">
        <Link to="/" className="text-white">
          <FaHome size="1.5rem" />
        </Link>
      </li>
      <li className="p-1">
        <Link to="/newgame" className="text-white">
          <FaGamepad size="1.5rem" />
        </Link>
      </li>
      <li className="p-1">
        <Link to="/activegame/123" className="text-white">
          <FaUserAlt size="1.5rem" />
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
