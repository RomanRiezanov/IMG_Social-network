import React from 'react';
import user from '../../../../../resources/media/IrinaPchelnikova.jpg';
import classes from './Chat.module.css';
import Message from './Message/Message';

const Chat = ({ ...props }) => {
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
        {props.messagesData.map((message) => (
          <Message message={message.message} key={message.id} />
        ))}
      </div>
    </div>
  );
};

export default Chat;
