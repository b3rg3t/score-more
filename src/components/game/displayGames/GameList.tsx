import React, { useState, useEffect } from "react";
import GameCard from "./GameCard";
import { GET_STORAGE } from "../../utils/localStorage";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";

const GameList = (): React.ReactElement => {
  const [games, setGames] = useState([] as any);
  const [displayActiveGames, setDisplayActiveGames] = useState(true);
  const [displayInActiveGames, setDisplayInActiveGames] = useState(false);

  useEffect(() => {
    const storageGames = GET_STORAGE("games");
    if (storageGames?.gameIds?.length) {
      setGames(storageGames.gameIds);
    }
  }, []);
  if (games.length) {
    const activeGames = games.filter((game: any) => game.isActive);
    const inActiveGames = games.filter((game: any) => !game.isActive);
    return (
      <>
        <section>
          <div className="pl-2 mb-2 border-bottom d-flex justify-content-between align-items-center">
            <h6 className="mb-0">
              Active games{" "}
              <span className="badge badge-dark pt-1">{activeGames.length}</span>
            </h6>
            <button
              className="btn btn-link btn-sm"
              onClick={() =>
                setDisplayActiveGames((prevState) => (prevState ? false : true))
              }
            >
              {!displayActiveGames ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
          {displayActiveGames &&
            (activeGames.length ? (
              <ul className="game-list list-unstyled">
                {activeGames.map((game: any) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </ul>
            ) : (
              <div className="d-flex flex-column">
                <p className="px-2 small text-muted mb-0">No active games..</p>
                <div className="d-flex justify-content-center py-2 border-bottom" >
                  <a className="btn btn-dark btn-sm d-flex align-items-center" href={"/newgame"}>
                    <small><FaPlus className="mr-2"/>Create game</small>
                  </a>
                </div>
              </div>
            ))}
        </section>
        <section>
          <div className="pl-2 mb-2 border-bottom d-flex justify-content-between align-items-center">
            <h6 className="mb-0">
              Finished games{" "}
              <span className="badge badge-dark pt-1">{inActiveGames.length}</span>
            </h6>
            <button
              className="btn btn-link btn-sm"
              onClick={() =>
                setDisplayInActiveGames((prevState) =>
                  prevState ? false : true
                )
              }
            >
              {!displayInActiveGames ? <FaChevronDown /> : <FaChevronUp />}
            </button>
          </div>
          {displayInActiveGames &&
            (inActiveGames.length ? (
              <ul className="game-list list-unstyled">
                {inActiveGames.map((game: any) => (
                  <GameCard key={game.id} game={game} />
                ))}
              </ul>
            ) : (
              <p className="px-2 small text-muted">No finished games..</p>
            ))}
        </section>
      </>
    );
  } else {
    return (
      <div className="d-flex flex-column align-items-center justify-content-center">
        <p>You don't have any active games</p>
        <Link className="btn btn-dark" to={`/newgame`}>
          Create new game
        </Link>
      </div>
    );
  }
};

export default GameList;
