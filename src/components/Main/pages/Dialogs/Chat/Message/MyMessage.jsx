import React from "react";
import classes from "./MyMessage.module.css";

const MyMessage = ({ userMessage }) => {
  return (
    <div className={classes.messageBlock}>
      <div className={classes.messageData}>
        <span className={classes.messageDataTime}>10:10 AM, Today</span>
        <span className={classes.messageDataName}>
          Irina<i className="fa fa-circle me"></i>
        </span>
      </div>
      <div className={classes.message}>{userMessage}</div>
    </div>
  );
};

export default MyMessage;
