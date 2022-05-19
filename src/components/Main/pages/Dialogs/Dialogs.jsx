import React from "react";
import ChatContainer from "./Chat/ChatContainer";
import classes from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";

const Dialogs = ({ store, dispatch }) => {
  return (
    <div className={classes.main}>
      <div className={classes.dialogsBlock}>
        <div className={classes.search}>
          <input type="text" placeholder="search" />
          <i className={`fa fa-search ${classes.icon}`}></i>
        </div>
        <div className={classes.dialogs}>
          {store.dialogsPage.dialogs.map((user) => (
            <DialogUser name={user.name} status={user.status} key={user.id} />
          ))}
        </div>
      </div>
      <ChatContainer store={store} dispatch={dispatch} />
    </div>
  );
};

export default Dialogs;
