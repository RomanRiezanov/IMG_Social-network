import React from "react";
import friend from "../../../../../resources/media/IrinaPchelnikova.jpg";
import classes from "./Friend.module.css";

const Friend = ({ ...props }) => {
  return (
    <div className={classes.person}>
      <img src={friend} alt={`friend ${props.name}`} />
      <div>
        <h4>{props.name}</h4>
        <h4>{props.job}</h4>
      </div>
    </div>
  );
};

export default Friend;
