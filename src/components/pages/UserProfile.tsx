import React from "react";
import DisplayUsersGames from "../users/DisplayUsersGames";

const UserProfile = ({ match }: any) => {
  const {
    params: { id },
  } = match;
  return (
    <main>
      <DisplayUsersGames id={id} />
    </main>
  );
};

export default UserProfile;
