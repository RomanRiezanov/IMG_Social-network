import React from "react";
import User from "./User/User";
import classes from "./Users.module.css";

const Users = ({ users, follow, unfollow }) => {
  return (
    <div className={classes.users}>
      {users.map((user) => (
        <User
          key={user.id}
          userId={user.id}
          name={user.name}
          country={user.country}
          city={user.city}
          status={user.status}
          alt={user.alt}
          followed={user.followed}
          follow={follow}
          unfollow={unfollow}
        />
      ))}
    </div>
  );
};

export default Users;
