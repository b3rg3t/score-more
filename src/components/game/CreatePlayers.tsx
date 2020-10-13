import React, { useState, useContext } from "react";

import Select from "react-select/creatable";
import { components } from "react-select";
import { ImUsers } from "react-icons/im";
import { v4 as uuidv4 } from "uuid";
import { GlobalContext } from "../../store/contexts/mainContext";

const CreatePlayer = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [options, setOptions] = useState([] as any);

  const MultiValueContainer = (props: any) => (
    <components.MultiValueContainer {...props}>
      <span className="d-flex align-items-center px-1">
        <ImUsers className="mr-1" />
        {state.users.length}
      </span>
    </components.MultiValueContainer>
  );

  const setPlayers = (value: any) => {
    console.log(value);
    if (value) {
      if (value.length > 0) {
        dispatch({ type: "SET_PLAYERS", payload: { value } });
      } else {
        dispatch({ type: "SET_PLAYERS" });
      }
    } else {
      dispatch({ type: "CLEAR_PLAYERS" });
    }
  };

  const createOption = (label: string) => ({
    label,
    value: uuidv4(),
    games: [],
  });

  const handleCreate = (inputValue: string) => {
    const newOption = createOption(inputValue);
    dispatch({ type: "ADD_PLAYER", payload: { value: newOption } });
    setOptions([...options, newOption]);
  };

  return (
    <Select
      name="players"
      aria-label="Add players"
      className="w-100"
      classNamePrefix="addPlayer"
      closeMenuOnSelect={true}
      onChange={setPlayers}
      value={state.users}
      noOptionsMessage={() => "Writa a name for the player"}
      isMulti={true}
      options={options}
      onCreateOption={handleCreate}
      hideSelectedOptions={false}
      placeholder="Add players.."
      components={{ MultiValueContainer }}
    />
  );
};

export default CreatePlayer;
