import React from "react"
import { Link } from "react-router-dom";

const Navbar = () => (
    <nav className="main-shadow w-100 bg-dark">
        <ul className="list-unstyled d-flex justify-content-between p-1 m-0">
            <li className="p-1">
                <Link to="/" className="text-white">Home</Link>
            </li>
            <li className="p-1">
                <Link to="/newgame" className="text-white">New game</Link>
            </li>
            <li className="p-1">
                <Link to="/activegame/123" className="text-white">Users</Link>
            </li>
        </ul>
    </nav>
)


export default Navbar;