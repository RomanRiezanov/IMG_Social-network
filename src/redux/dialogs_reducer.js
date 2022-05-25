const SEND_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  dialogs: [
    { id: 1, name: "Irina Pchelnikova", status: "online" },
    { id: 2, name: "Oleg Motyka", status: "online" },
    { id: 3, name: "Vadim Tkachenko", status: "online" },
    { id: 4, name: "Anatolii Kozina", status: "online" },
    { id: 5, name: "Artur Nebotov", status: "online" },
    { id: 6, name: "Vladislav Nazarenko", status: "online" },
    { id: 7, name: "Andrey Tkachenko", status: "online" },
    { id: 8, name: "Nikita Tovstiy", status: "online" },
  ],
  messagesData: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Yo!" },
  ],
  userMessagesData: [],
  newMessageText: "",
};

export const dialogsReducer = (state = initialState, action) => {
  if (action.type === SEND_MESSAGE) {
    const userMessage = {
      id: state.userMessagesData.length + 1,
      message: state.newMessageText,
    };
    return {
      ...state,
      userMessagesData: [...state.userMessagesData, userMessage],
      newMessageText: "",
    };
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    return {
      ...state,
      newMessageText: action.text,
    };
  }
  return state;
};

export const addMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const onMessageChangeActionCreator = (userMessage) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  text: userMessage,
});
