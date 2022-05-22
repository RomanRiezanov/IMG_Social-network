import { connect } from "react-redux";
import {
  addMessageActionCreator,
  onMessageChangeActionCreator,
} from "../../../../../redux/dialogs_reducer";
import Chat from "./Chat";

const mapStateToProps = (state) => {
  return {
    messagesData: state.dialogsPage.messagesData,
    userMessagesData: state.dialogsPage.userMessagesData,
    newMessageText: state.dialogsPage.newMessageText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageActionCreator());
    },
    messageChange: (text) => {
      dispatch(onMessageChangeActionCreator(text));
    },
  };
};

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
