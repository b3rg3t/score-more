import React, { useState, useEffect } from "react";

import Select from "react-select/creatable";
import { components } from "react-select";
import { ImUsers } from "react-icons/im";

const CreatePlayer = ({ users }: any) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(users);
  }, [users]);

  const MultiValueContainer = (props: any) => (
    <components.MultiValueContainer {...props}>
      <span className="d-flex align-items-center px-1">
        <ImUsers />
        {props.data.label}
      </span>
    </components.MultiValueContainer>
  );

  return (
    <label className="w-100">
      <span className="mb-2">Add players</span>
      <Select
        classNamePrefix="addPlayer"
        closeMenuOnSelect={true}
        noOptionsMessage={() => "No players yet.. type to create one"}
        isMulti={true}
        options={options}
        hideSelectedOptions={false}
        placeholder="Write name.."
        components={{ MultiValueContainer }}
      />
    </label>
  );
};

export default CreatePlayer;
