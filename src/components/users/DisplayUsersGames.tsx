import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GET_STORAGE } from "../utils/localStorage";

import GameCard from "../game/displayGames/GameCard";

interface DisplayUsersGamesProps {
  id: string;
}

const DisplayUsersGames = ({ id }: DisplayUsersGamesProps) => {
  const [games, setGames] = useState([] as any);
  const [user, setUser] = useState(null as any);
  const [displayList, setDisplayList] = useState(true);

  useEffect(() => {
    const storageUser = GET_STORAGE("players");
    if (storageUser) {
      const userToDisplay = storageUser.players.find(
        (player: any) => player.value === id
      );
      if (userToDisplay) {
        setUser(userToDisplay);
      }
    }
  }, [id]);

  useEffect(() => {
    if (user) {
      const storageGames = GET_STORAGE("games");
      if (storageGames?.gameIds?.length) {
        const array1 = user.games.map((igame: any) => igame.id);
        const uGames = storageGames.gameIds.filter((element: any) =>
          array1.includes(element.id)
        );
        setGames(uGames);
      }
    }
  }, [user, id]);

  return (
    <section className="d-flex flex-column">
      <div className="d-flex justify-content-center">
        <code>
          <b>{user?.label}</b>
        </code>
      </div>
      <div className="d-flex align-items-center justify-content-between px-2 mt-1 border-bottom">
        <h5 className="mb-0">ActiveGames</h5>
        {displayList ? (
          <button
            className="btn btn-sm btn-link"
            onClick={() => setDisplayList(false)}
          >
            <FaChevronUp />
          </button>
        ) : (
          <button
            className="btn btn-sm btn-link"
            onClick={() => setDisplayList(true)}
          >
            <FaChevronDown />
          </button>
        )}
      </div>
      {displayList && (
        <ul className="list-unstyled mt-2 px-2">
          {games?.length > 0 &&
            games.map((game: any) => <GameCard key={game.id} game={game} />)}
        </ul>
      )}
    </section>
  );
};

export default DisplayUsersGames;
