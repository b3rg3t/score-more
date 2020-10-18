import React, { useState } from 'react'
import { FaInfo } from "react-icons/fa";
import GithubProfile from './GithubProfile';


const DisplayGithub = () => {
    const [showProfile, setShowProfile] = useState(false);
    return (
        <div className="d-flex justify-content-end">
            <button
                className="box-shadow d-flex align-items-center btn btn-info rounded-circle"
                onClick={() => setShowProfile(showProfile ? false : true)}
                style={{ width: "30px", height: "30px" }}
            >
                <FaInfo size="0.8rem" />
            </button>
            {showProfile ? <GithubProfile /> : null}
        </div>
    )
}

export default DisplayGithub
