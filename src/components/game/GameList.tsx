import React from 'react'
import GameCard from "../game/GameCard";
import { GET_STORAGE } from "../utils/localStorage";

const GameList = ({ games }: any): React.ReactElement => {
    console.log(games)
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
