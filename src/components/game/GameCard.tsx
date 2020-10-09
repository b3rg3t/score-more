import React from "react"
import { FaChevronRight } from "react-icons/fa"

const GameCard = ({ game }: any) => (
    <li className="box-shadow p-1 m-1 d-flex justify-content-between rounded">
        <div className="d-flex flex-column w-100">
            <h4 className="card-title">{game.title}</h4>
            <p className="m-0">Players: {game.players.length}</p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-link round"><FaChevronRight ></FaChevronRight></button>
        </div>

    </li>
)

export default GameCard;