import React from "react";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../../../../redux/dialogs_reducer";
import Chat from "./Chat";

const ChatContainer = ({ store, dispatch }) => {
  const addMessage = () => {
    dispatch(addMessageActionCreator());
  };

  const messageChange = (text) => {
    dispatch(onMessageChangeActionCreator(text));
  };

  return (
    <Chat
      addMessage={addMessage}
      messageChange={messageChange}
      messagesData={store.dialogsPage.messagesData}
      userMessagesData={store.dialogsPage.userMessagesData}
      newMessageText={store.dialogsPage.newMessageText}
    />
  );
};

export default ChatContainer;
