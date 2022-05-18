const SEND_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

export const dialogsReducer = (state, action) => {
  if (action.type === SEND_MESSAGE) {
    const userMessage = {
      id: state.userMessagesData.length + 1,
      message: state.newMessageText,
    };
    state.userMessagesData.push(userMessage);
    state.newMessageText = "";
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.text;
  }
  return state;
};

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const onMessageChangeActionCreator = (userMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: userMessage,
});
