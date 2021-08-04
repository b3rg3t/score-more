import React, { useEffect, useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaEdit,
  FaPlus,
  FaSave,
} from "react-icons/fa";
import { GET_STORAGE } from "../utils/localStorage";

import GameCard from "../game/displayGames/GameCard";
import EditUser from "./EditUser";
import ProfilePic from "../../images/profile2.png";
interface DisplayUsersGamesProps {
  id: string;
}

const DisplayUsersGames = ({ id }: DisplayUsersGamesProps) => {
  const [games, setGames] = useState([] as any);
  const [user, setUser] = useState(null as any);
  const [displayActiveGames, setDisplayActiveGames] = useState(true);
  const [displayInActiveGames, setDisplayInActiveGames] = useState(false);
  const [editUser, setEditUser] = useState(false);

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

  const editUserProfile = () => {
    console.log("here");
  };

  const activeGames = games.filter((game: any) => game.isActive);
  const inActiveGames = games.filter((game: any) => !game.isActive);

  return (
    <section className="d-flex flex-column px-1">
      <div className="d-flex justify-content-between p-1 border-bottom align-items-center">
        <div>
          <img
            className="rounded-circle border border-secondary mr-2 p-1"
            width="22px"
            height="22px"
            alt="img of profile"
            src={`${ProfilePic}`}
          />
          <code onClick={() => editUserProfile()}>
            <b>{user?.label.toUpperCase()}</b>
          </code>
        </div>
        <button
          className={`btn ${!editUser ? "btn-primary" : "btn-outline-primary"} btn-sm d-flex align-items-center`}
          onClick={() => setEditUser((prevState) => (prevState ? false : true))}
        >
          {!editUser ? <FaEdit /> : <FaSave />}
        </button>
      </div>
      {editUser && <EditUser />}

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
              <div className="d-flex justify-content-center py-2 border-bottom">
                <a
                  className="btn btn-dark btn-sm d-flex align-items-center"
                  href={"/newgame"}
                >
                  <small>
                    <FaPlus className="mr-2" />
                    Create game
                  </small>
                </a>
              </div>
            </div>
          ))}
      </section>
      <section>
        <div className="pl-2 mb-2 border-bottom d-flex justify-content-between align-items-center">
          <h6 className="mb-0">
            Finished games{" "}
            <span className="badge badge-dark pt-1">
              {inActiveGames.length}
            </span>
          </h6>
          <button
            className="btn btn-link btn-sm"
            onClick={() =>
              setDisplayInActiveGames((prevState) => (prevState ? false : true))
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
    </section>
  );
};

export default DisplayUsersGames;
