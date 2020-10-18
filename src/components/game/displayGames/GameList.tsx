import React, { useState, useEffect } from 'react'
import GameCard from "./GameCard";
import { GET_STORAGE } from "../../utils/localStorage";

const GameList = (): React.ReactElement => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const storageGames = GET_STORAGE("games");
    if (storageGames) {
      setGames(storageGames.gameIds);
    }
  }, []);

  const fetchedGames = games.map((game: any) => {
    const allGames = GET_STORAGE(game);
    if (allGames) {
      return allGames;
    }
    return null;
  });
  if (fetchedGames.length) {
    return (
      <ul className="list-unstyled">
        {fetchedGames.map((game: any) => (
          <GameCard key={game.id} game={game} />
        ))}
      </ul>
    );
  } else {
    return <></>;
  }
}

export default GameList
