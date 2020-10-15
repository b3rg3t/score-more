import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import {
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarker,
} from "react-icons/fa";

const GithubProfile = () => {
  const [user, setUser] = useState(null as any);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  const url = "https://api.github.com/users/b3rg3t";

  const getProfile = async () => {
    try {
      const response: any = await axios.get(url);

      if (response.status === 200) {
        setUser(response.data);
        setIsLoading(false);
      } else {
        setIsError(response.status);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
      setIsError(error.response.status);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  if (isLoading) {
    return <Loader />;
  } else if (isError) {
    return <ErrorMessage errorCode={isError} message="Couldn't load user" />;
  } else {
    return (
      <div className="box-shadow mb-2 text-white bg-dark rounded" >
        <div className="row m-1">
          <div className="col-sm-3 d-flex align-items-center justify-content-center ">
            <img
              className=" rounded-circle border mt-4 my-sm-2"
              src={user.avatar_url}
              width="auto"
              style={{maxHeight: "130px"}}
              alt="Profile pick David Berg"
            />
          </div>
          <div className="col-sm-9 pl-0"> 
            <div className="card-body h-100 d-flex justify-content-between flex-column">
              <div>
                <div className="border-bottom pb-2">
                  <h5 className="card-title mb-0">
                    {user.name},<code className="ml-2">{user.login}</code>
                  </h5>
                </div>

                <p className="card-text mb-0 text-info">
                  <FaMapMarker size="0.8rem"/>
                  <small className="text-muted ml-1">{user.location}</small>
                </p>
                <p className="card-text text-white mb-1">
                  This site is created by {user.name} who is a junior {user.bio}
                  .
                </p>
              </div>
              <div className="d-flex justify-content-between flex-wrap">
                <div className="d-flex align-items-end">
                  <a href={user.blog} target="_blank" rel="noopener noreferrer">{user.blog}</a>
                </div>
                <div>
                  <a
                    className="text-info"
                    href={user.html_url}
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size="1.5rem" />
                  </a>
                  <a
                    className="text-info ml-2"
                    href="https://www.facebook.com/davidberg1990"
                    title="Github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook size="1.5rem" />
                  </a>
                  <a
                    className="text-info ml-2"
                    href="https://www.linkedin.com/in/david-berg-385530175"
                    title="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size="1.5rem" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default GithubProfile;
