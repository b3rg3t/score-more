import React, { useState, useEffect } from "react";

import { GET_STORAGE } from "../../utils/localStorage";
import Loader from "../../Loader";

import PlayerList from "./PlayerList";

interface ActiveGameProps {
  id: string;
  gameId: string;
  addNewSlide?: () => void;
}

const ActiveGame = ({ id, gameId }: ActiveGameProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [slides, setSlides] = useState([] as any);
  const [isActiveRound, setIsActiveRound] = useState(null as any);
  // eslint-disable-next-line
  const [updateGameList, setUpdateGameList] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const getGames = GET_STORAGE("games");
      if (getGames) {
        const activeGame = getGames.gameIds.find((game: any) => {
          return game.id === id;
        });
        setSlides(activeGame.round);
        setIsActiveRound(activeGame.activeRound.id);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, [updateGameList]);

  const addNewRound = () => {
    setUpdateGameList((prevState) => (prevState ? false : true));
  };

  if (isLoading) {
    return <Loader />;
  } else {
    return (
      <section className="player-list-section">
        {slides.map((slide: any, index: number) => (
          <PlayerList
            key={index}
            id={id}
            activeGame={slide}
            isActiveRound={isActiveRound === slide.id ? true : false}
            addNewSlide={addNewRound}
          />
        ))}
      </section>
    );
  }
};

export default ActiveGame;
