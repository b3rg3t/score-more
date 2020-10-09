import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

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
        console.log(response.data);
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
      <div className="box-shadow m-2 text-white bg-dark rounded">
        <div className="row m-1">
          <div className="col-sm-2 d-flex align-items-center justify-content-center ">
            <img
              className="w-100 rounded-circle border mt-4 mt-sm-0"
              src={user.avatar_url}
              alt="Profile pick David Berg"
            />
          </div>
          <div className="col-sm-10 pl-0">
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">
                <small className="text-muted">{user.location}</small>
              </p>
              <a href={user.html_url} title={user.html_url}>
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default GithubProfile;
