import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "../../store/contexts/mainContext";

const DisplayPlayers = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const removeUser = (id: string) => {
      console.log(id)
    dispatch({ type: "REMOVE_PLAYER", payload: { value: id } });
  };

  return state?.users?.length ? (
    <ul className="list-unstyled d-flex">
      {state.users.map((user, index) => (
        <li className="box-shadow badge d-flex align-items-center justify-content-center pl-2" key={index}>
          <p className="m-0">{user.label}</p>
          <button
            className="btn btn-dark btn-sm ml-2 d-flex align-items-center" 
            onClick={() => removeUser(user.value)}
            style={{width: "24px"}}
          >
            <FaTimes /> 
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <div>Add players maaan</div>
  );
};

export default DisplayPlayers;
