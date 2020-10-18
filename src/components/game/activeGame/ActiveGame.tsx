import React, { useState, useEffect, useRef } from "react";
import PlayerList from "./PlayerList";

import { GET_STORAGE } from "../../utils/localStorage";
import Loader from "../../Loader";
import Footer from "../../Footer";

import {
  FaChevronLeft,
  FaChevronRight,
  FaCog,
  FaFlagCheckered,
} from "react-icons/fa";
import Modal from "../../Modal";

const ActiveGame = ({ id }: any) => {
  const [game, setGame] = useState({} as any);
  const [isLoading, setIsLoading] = useState(true);

  const getGame = GET_STORAGE(id);

  useEffect(() => {
    try {
      setGame(getGame);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
    console.log("mounted");
    return () => console.log("unmounting...");

    // eslint-disable-next-line
  }, []);

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

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Modal ref={modalRef}>
        <div className="d-flex flex-column align-items-center">
          <h5>Options</h5>
          <button className="btn btn-light" onClick={() => closeModal()}>
            Close
          </button>
        </div>
      </Modal>
      <section className="player-list-section ">
        <header className="d-flex justify-content-between align-items-center px-2 mt-1">
          <h5 className="text-center mb-0 w-100">
            <code>{game?.title}</code>
          </h5>
        </header>
        <div className="d-flex justify-content-between align-items-center px-2 mt-1">
          <span
            className="box-shadow bg-dark text-white border-dark rounded d-flex align-items-center justify-content-center px-3 mr-1"
            style={{ height: "24px" }}
          >
            <small className="font-weight-bold">
              Round: {game?.round?.length}
            </small>
          </span>
          <button
            title="Finish game"
            className="box-shadow btn btn-outline-dark btn-sm d-flex justify-content-center align-items-center"
          >
            <FaFlagCheckered />
          </button>
        </div>
        <PlayerList game={game} />
        <Footer styling={"bg-dark p-1 player-list-footer top-shadow"}>
          <nav className="text-white">
            <ul className="list-unstyled d-flex m-0 justify-content-between">
              {game?.round?.length > 1 ? (
                <li>
                  <button className="btn btn-dark p-1 m-0 d-flex justify-content-center align-items-center">
                    <FaChevronLeft size="1.2rem" />
                  </button>
                </li>
              ) : (
                <li style={{ width: "29.2px" }}></li>
              )}

              <li>
                <button
                  className="btn btn-dark p-1 m-0 d-flex justify-content-center align-items-center"
                  onClick={() => openModal()}
                >
                  <FaCog size="1.2rem" />
                </button>
              </li>
              <li>
                <button className="btn btn-dark p-1 m-0 d-flex justify-content-center align-items-center">
                  <FaChevronRight size="1.2rem" />
                </button>
              </li>
            </ul>
          </nav>
        </Footer>
      </section>
    </>
  );
};

export default ActiveGame;
