import React from "react";
import StoreContext from "../../../../StoreContext";
import ChatContainer from "./Chat/ChatContainer";
import classes from "./Dialogs.module.css";
import DialogUser from "./DialogUser/DialogUser";

const Dialogs = () => {
  return (
    <div className={classes.main}>
      <div className={classes.dialogsBlock}>
        <div className={classes.search}>
          <input type="text" placeholder="search" />
          <i className={`fa fa-search ${classes.icon}`}></i>
        </div>
        <div className={classes.dialogs}>
          <StoreContext.Consumer>
            {(store) => {
              const dialogs = store.getState().dialogsPage.dialogs;
              dialogs.map((user) => (
                <DialogUser
                  name={user.name}
                  status={user.status}
                  key={user.id}
                />
              ));
            }}
          </StoreContext.Consumer>
        </div>
      </div>
      <ChatContainer />
    </div>
  );
};

export default Dialogs;
