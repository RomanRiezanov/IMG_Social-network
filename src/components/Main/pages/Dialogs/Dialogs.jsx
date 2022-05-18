import React from "react";
import Chat from "./Chat/Chat";
import classes from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";

const Dialogs = ({
  dialogs,
  messagesData,
  dispatch,
  userMessagesData,
  newMessageText,
}) => {
  return (
    <div className={classes.main}>
      <div className={classes.dialogsBlock}>
        <div className={classes.search}>
          <input type="text" placeholder="search" />
          <i className={`fa fa-search ${classes.icon}`}></i>
        </div>
        <div className={classes.dialogs}>
          {dialogs.map((user) => (
            <DialogUser name={user.name} status={user.status} key={user.id} />
          ))}
        </div>
      </div>
      <Chat
        messagesData={messagesData}
        userMessagesData={userMessagesData}
        dispatch={dispatch}
        newMessageText={newMessageText}
      />
    </div>
  );
};

export default Dialogs;
