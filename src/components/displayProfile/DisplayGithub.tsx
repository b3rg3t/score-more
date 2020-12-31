import React, { useState } from "react";
import { FaInfo } from "react-icons/fa";
import GithubProfile from "./GithubProfile";

const DisplayGithub = () => {
  const [showProfile, setShowProfile] = useState(false);
  return (
    <div className="d-flex justify-content-end flex-column align-items-end">
      {showProfile ? <GithubProfile /> : null}
      <button
        className="box-shadow d-flex align-items-center btn btn-info rounded-circle mb-2"
        onClick={() => setShowProfile(showProfile ? false : true)}
        style={{ width: "30px", height: "30px" }}
      >
        <FaInfo size="0.8rem" />
      </button>
    </div>
  );
};

export default DisplayGithub;
