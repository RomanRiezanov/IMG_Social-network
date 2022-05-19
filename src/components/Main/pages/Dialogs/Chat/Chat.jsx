import React from "react";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../../../../redux/dialogs_reducer";
import user from "../../../../../resources/media/IrinaPchelnikova.jpg";
import classes from "./Chat.module.css";
import Message from "./Message/Message";
import MyMessage from "./Message/MyMessage";

const Chat = ({ messagesData, userMessagesData, newMessageText, dispatch }) => {
  const addMessage = () => {
    dispatch(addMessageActionCreator());
  };

  const onMessageChange = (event) => {
    dispatch(onMessageChangeActionCreator(event.target.value));
  };

  return (
    <div className={classes.chat}>
      <div className={classes.chatHeader}>
        <img src={user} alt="" />
        <div className={classes.chatAbout}>
          <div className={classes.chatAboutText}>
            <div className={classes.chatWith}>Chat with Irina Pchelnikova</div>
            <div className={classes.chatNumMessages}>
              already 11 902 messages
            </div>
          </div>
          <div>
            <i className="fa fa-star"></i>
          </div>
        </div>
      </div>
      <div className={classes.chatHistory}>
        {messagesData.map((message) => (
          <Message message={message.message} key={message.id} />
        ))}
        {userMessagesData.map((userMessage) => (
          <MyMessage userMessage={userMessage.message} key={userMessage.id} />
        ))}
      </div>
      <div class={classes.messageForm}>
        <textarea
          rows="3"
          onChange={onMessageChange}
          value={newMessageText}
          placeholder="Write a message..."
        ></textarea>
        <button onClick={addMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
