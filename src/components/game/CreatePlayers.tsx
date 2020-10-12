import React, { useState, useEffect, useContext } from "react";

import Select from "react-select/creatable";
import { components } from "react-select";
import { ImUser } from "react-icons/im";
import { GlobalContext } from "../../store/contexts/mainContext";

const CreatePlayer = ({ users }: any) => {
  const { state, dispatch } = useContext(GlobalContext);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(users);
  }, [users]);

  const MultiValueContainer = (props: any) => (
    <components.MultiValueContainer {...props}>
      <span className="d-flex align-items-center px-1">
        <ImUser />
        {/* {props.data.label} */}
        {props.children}
      </span>
    </components.MultiValueContainer>
  );

  const setPlayers = (value: any) => {
    console.log(value)
    if (value) {
      dispatch({ type: "ADD_PLAYERS", payload: { value } });
    } else {
      dispatch({ type: "ADD_PLAYERS", payload: { value: [] } });
    }
  };

  return (
    <div className="w-100">
      <Select
        name="players"
        aria-label="Add players"
        classNamePrefix="addPlayer"
        closeMenuOnSelect={true}
        onChange={setPlayers}
        value={state.users}
        noOptionsMessage={() => "No players yet.. type to create one"}
        isMulti={true}
        options={options}
        hideSelectedOptions={false}
        placeholder="Add players.."
        components={{ MultiValueContainer }}
      />
    </div>
  );
};

export default CreatePlayer;
