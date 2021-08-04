import React, { useState, useEffect, useRef } from "react";

import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import PlayerItem from "./PlayerItem";
import { GET_STORAGE, SET_STORAGE } from "../../utils/localStorage";

import { FaFlagCheckered, FaTimes, FaTrashAlt } from "react-icons/fa";
import Modal from "../../Modal";

interface PlayerListProps {
  id: string;
  gameId?: string;
  activeGame: any;
  isActiveRound?: boolean;
  addNewSlide?: any;
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
  const [deleteItem, setDeleteItem] = useState({ id: null, label: null });

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
    addNewSlide && addNewSlide();
    // addNewSlide();
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
  };

  const deleteRound = () => {
    setDeleteItem({ id: activeGame.id, label: activeGame.round });
    openModal();
  };

  const removeRound = () => {
    const filteredGames = game.round.filter(
      (aGame: any) => activeGame.id !== aGame.id
    );

    const updatedGame = {
      ...allGames,
      ...game,
      gameIds: allGames.gameIds.map((gajm: any) => {
        if (gajm.id === id) {
          return {
            ...gajm,
            round: filteredGames,
            activeRound:
              filteredGames.length &&
              filteredGames[filteredGames.length - 1].id,
          };
        } else {
          return { ...gajm };
        }
      }),
    };
    SET_STORAGE(updatedGame, "games");
    addNewSlide && addNewSlide();
  };

  const finishGame = () => {
    const otherGames = allGames.gameIds.filter((aGame: any) => aGame.id !== id);
    const updatedGame = [
      {
        ...game,
        isActive: false,
      },
      ...otherGames,
    ];

    const updateGameStatus = {
      activeGame: activeGame.id,
      gameIds: updatedGame,
    };
    SET_STORAGE(updateGameStatus, "games");
  };

 const  reActivateGame = () => {
  const otherGames = allGames.gameIds.filter((aGame: any) => aGame.id !== id);
  const updatedGame = [
    {
      ...game,
      isActive: true,
    },
    ...otherGames,
  ];

  const updateGameStatus = {
    activeGame: activeGame.id,
    gameIds: updatedGame,
  };
  SET_STORAGE(updateGameStatus, "games");
 }

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
      setDeleteItem({ id: null, label: null });
    }
  };
  console.log(game);
  return (
    <>
      <Modal ref={modalRef}>
        <div className="d-flex flex-column align-items-center">
          <button
            className="btn btn-link btn-sm position-absolute"
            onClick={() => closeModal()}
            style={{ top: 0, right: 0 }}
          >
            <FaTimes />
          </button>
          {deleteItem?.id ? (
            <h5>Delete round {deleteItem.label}?</h5>
          ) : (
            <h5>Game finished?</h5>
          )}
          <div className="d-flex">
            <button
              className="btn btn-dark mr-1"
              onClick={() => (deleteItem?.id ? removeRound() : finishGame())}
            >
              Yes
            </button>

            <button className="btn btn-light ml-1" onClick={() => closeModal()}>
              Cancel
            </button>
          </div>
        </div>
      </Modal>
      <section className="player-list-section">
        <div className="d-flex justify-content-between align-items-center px-2 mt-1">
          <span
            className="box-shadow bg-dark text-white border-dark rounded d-flex align-items-center justify-content-center px-3 mr-1"
            style={{ height: "24px" }}
          >
            <small className="font-weight-bold">
              Round: {activeGame?.round}
            </small>
          </span>
          <div className="d-flex">
            <button
              className="btn btn-sm btn-outline-danger box-shadow mr-2 d-flex justify-content-center align-items-center"
              type="button"
              onClick={() => deleteRound()}
            >
              <FaTrashAlt />
            </button>
            <button
              title="Finish game"
              type="button"
              className="box-shadow btn btn-outline-dark btn-sm d-flex justify-content-center align-items-center"
              onClick={() => {
                setDeleteItem({ id: null, label: null });
                openModal();
              }}
            >
              <FaFlagCheckered />
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <ul className="list-unstyled overflow-auto p-2">
            {players?.length &&
              activeGame?.playerScore?.map((player: any) => (
                <PlayerItem
                  key={player.pId}
                  player={players.find((pId: any) => pId.value === player.pId)}
                  score={player.score}
                  register={register}
                  showScoreButtons={
                    isActiveRound && game.isActive ? true : false
                  }
                />
              ))}
          </ul>
          {isActiveRound && game?.isActive ? (
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark" type="submit">
                New round
              </button>
            </div>
          ) : (
            isActiveRound && (
              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-dark" onClick={() => reActivateGame()}>
                 Reactivate game
                </button>
              </div>
            )
          )}
        </form>
      </section>
    </>
  );
};

export default PlayerList;
