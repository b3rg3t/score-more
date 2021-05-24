import React, { useState, useEffect, useRef } from "react";

import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import PlayerItem from "./PlayerItem";
import { GET_STORAGE, SET_STORAGE } from "../../utils/localStorage";

import { FaFlagCheckered } from "react-icons/fa";
import Modal from "../../Modal";

interface PlayerListProps {
  id: string;
  gameId: string;
  activeGame: any;
  isActiveRound: boolean;
  addNewSlide: any;
}

const PlayerList = ({
  id,
  activeGame,
  addNewSlide,
  isActiveRound,
}: PlayerListProps) => {
  const { register, handleSubmit } = useForm({
    defaultValues: {},
  });
  const [game, setGame] = useState(null as any);
  const [allGames, setAllGames] = useState(null as any);
  const [players, setPlayers] = useState([]);

  const modalRef = useRef();

  useEffect(() => {
    const allPlayers = GET_STORAGE("players");
    if (allPlayers) {
      setPlayers(allPlayers.players);
      getGameScore();
    }
     // eslint-disable-next-line
  }, []);

  const getGameScore = () => {
    const allActiveGames = GET_STORAGE("games");

    if (allActiveGames) {
      const getGame = allActiveGames.gameIds.find(
        (aGame: any) => aGame.id === id
      );
      setGame(getGame);
      setAllGames(allActiveGames);
    }
  };

  const updateRoundScore = (roundId: string, data: any, newRound: any) => {
    const filteredGames = game.round.filter(
      (aGame: any) => roundId !== aGame.id
    );
    const updatedGameScore = [...filteredGames, data, newRound];

    const updatedGame = {
      ...allGames,
      gameIds: allGames.gameIds.map((gajm: any) => {
        if (gajm.id === id) {
          return { ...gajm, round: updatedGameScore, activeRound: newRound };
        } else {
          return { ...gajm };
        }
      }),
    };
    SET_STORAGE(updatedGame, "games");
  };

  const onSubmit = (data: any) => {
    const setScoreToRound = {
      id: game.activeRound.id,
      round: game.activeRound.round,
      playerScore: Object.keys(data).map((item) => {
        return {
          pId: item,
          score: parseInt(data[item]),
        };
      }),
    };

    const newRound = {
      id: uuidv4(),
      round: game.activeRound.round + 1,
      playerScore: Object.keys(data).map((item) => {
        return {
          pId: item,
          score: 0,
        };
      }),
    };

    updateRoundScore(activeGame.id, setScoreToRound, newRound);
    // addNewSlide();
  };

  const openModal = () => {
    if (modalRef) {
      //@ts-ignore
      modalRef.current.openModal();
    }
  };
  const closeModal = () => {
    if (modalRef) {
      //@ts-ignore
      modalRef.current.close();
    }
  };

  return (
    <>
      <Modal ref={modalRef}>
        <div className="d-flex flex-column align-items-center">
          <h5>Finish game?</h5>
          <button className="btn btn-light" onClick={() => closeModal()}>
            Close
          </button>
        </div>
      </Modal>
      <section className="player-list-section">
        <div className="d-flex justify-content-between align-items-center px-2 mt-1">
          <span
            className="box-shadow bg-dark text-white border-dark rounded d-flex align-items-center justify-content-center px-3 mr-1"
            style={{ height: "24px" }}
          >
            <small className="font-weight-bold">
              Round: {activeGame.round}
            </small>
          </span>
          <button
            title="Finish game"
            className="box-shadow btn btn-outline-dark btn-sm d-flex justify-content-center align-items-center"
            onClick={() => openModal()}
          >
            <FaFlagCheckered />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul className="list-unstyled overflow-auto p-2">
            {players?.length &&
              activeGame.playerScore.map((player: any) => (
                <PlayerItem
                  key={player.pId}
                  player={players.find((pId: any) => pId.value === player.pId)}
                  score={player.score}
                  register={register}
                />
              ))}
          </ul>
          {isActiveRound && (
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark" type="submit">
                New round
              </button>
            </div>
          )}
        </form>
      </section>
    </>
  );
};

export default PlayerList;
