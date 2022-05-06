import React from "react";
import Friend from "./Friend/Friend";
import classes from "./Friends.module.css";

const Friends = ({ ...props }) => {
  return (
    <div className={classes.friends}>
      <h2>Friends</h2>
      {props.friends.map((friend) => (
        <Friend key={friend.id} name={friend.name} job={friend.job} />
      ))}
    </div>
  );
};

export default Friends;
