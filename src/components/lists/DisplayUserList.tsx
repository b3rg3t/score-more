import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GET_STORAGE } from "../utils/localStorage";

import ProfilePic from "../../images/profile2.png";

const DisplayUserList = () => {
  const [users, setUsers] = useState(null as any);

  useEffect(() => {
    const storagedUsers = GET_STORAGE("players");
    if (storagedUsers?.players) {
      setUsers(storagedUsers.players);
    }
  }, []);

  return (
    <section className="px-2">
        <div className="pl-2 mb-2 border-bottom d-flex justify-content-center align-items-center">
          <h5 className="mb-0 py-1">
            Users
          </h5>

        </div>
      <ul className="list-unstyled">
        {users &&
          users.map((user: any) => (
            <li
              key={user.value}
              className="box-shadow p-2 d-flex justify-content-between rounded mb-2"
            >
              <div className="d-flex align-items-center justify-content-center">
                <img
                  className="rounded-circle border border-secondary mr-2 p-1"
                  width="22px"
                  height="22px"
                  alt="img of profile"
                  src={`${ProfilePic}`}
                />
                <h5 className="mb-0">{user.label}</h5>
              </div>
              <Link to={`/user/${user.value}`}>
                <FaChevronRight />
              </Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default DisplayUserList;
