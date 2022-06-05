import React from "react";
import classes from "./Message.module.css";

const Message = ({ message }) => {
  return (
    <div className={classes.messageBlock}>
      <div className={classes.messageData}>
        <span className={classes.messageDataName}>
          <i className="fa fa-circle online"></i>Irina
        </span>
        <span className={classes.messageDataTime}>10:10 AM, Today</span>
      </div>
      <div className={classes.message}>{message}</div>
    </div>
  );
};

export default Message;
