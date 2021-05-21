import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GET_STORAGE } from "../utils/localStorage";

const DisplayUserList = () => {
  const [users, setUsers] = useState(null as any);

  useEffect(() => {
    const storagedUsers = GET_STORAGE("players");
    if (storagedUsers?.players) {
      setUsers(storagedUsers.players);
    }
  }, []);

  return (
    <section>
      <h4 className="text-center mt-1 mb-0">
        <code>Userlist</code>
      </h4>
      <ul className="list-unstyled p-2">
        {users &&
          users.map((user: any) => (
            <li
              key={user.value}
              className="box-shadow p-2 d-flex justify-content-between rounded mb-2"
            >
              <h5 className="mb-0">{user.label}</h5>

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
