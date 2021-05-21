import React, { useState, useEffect, useRef } from "react";
import PlayerList from "./PlayerList";

import { GET_STORAGE } from "../../utils/localStorage";
import Loader from "../../Loader";

import {
  FaFlagCheckered,
} from "react-icons/fa";
import Modal from "../../Modal";

const ActiveGame = ({ id }: any) => {
  const [game, setGame] = useState({} as any);
  const [isLoading, setIsLoading] = useState(true);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const getGame = GET_STORAGE(id);
      setGame(getGame);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
    // eslint-disable-next-line
  }, [update]);

  const modalRef = useRef();

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

  const updateListCallback = () => {
    setUpdate((prevState) => (prevState ? false : true));
  };

  if (isLoading) {
    return <Loader />;
  } else {
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
        <section className="player-list-section ">
          <div className="d-flex justify-content-between align-items-center px-2 mt-1">
            <span
              className="box-shadow bg-dark text-white border-dark rounded d-flex align-items-center justify-content-center px-3 mr-1"
              style={{ height: "24px" }}
            >
              <small className="font-weight-bold">
                Round: {game?.activeRound?.round}
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
          <PlayerList
            id={id}
            updateListCallback={updateListCallback}
            activeGame={game}
          />
        </section>
      </>
    );
  }
};

export default ActiveGame;
