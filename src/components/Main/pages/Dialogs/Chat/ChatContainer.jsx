import React from "react";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../../../../redux/dialogs_reducer";
import StoreContext from "../../../../../StoreContext";
import Chat from "./Chat";

const ChatContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addMessage = () => {
          store.dispatch(addMessageActionCreator());
        };

        const messageChange = (text) => {
          store.dispatch(onMessageChangeActionCreator(text));
        };
        return (
          <Chat
            addMessage={addMessage}
            messageChange={messageChange}
            messagesData={store.getState().dialogsPage.messagesData}
            userMessagesData={store.getState().dialogsPage.userMessagesData}
            newMessageText={store.getState().dialogsPage.newMessageText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default ChatContainer;
