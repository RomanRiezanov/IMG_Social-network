import { dialogsReducer } from "./dialogs_reducer";
import { profileReducer } from "./profile_reducer";
import { sidebarReducer } from "./sidebar_reducer";

export const store = {
  _state: {
    sideBar: {
      friends: [
        { id: 1, name: "Irina Pchelnikova", job: "2D Artist" },
        { id: 2, name: "Oleg Motyka", job: "Full-Stack Developer" },
        { id: 3, name: "Anatolii Kozina", job: "Back-End Developer" },
      ],
    },
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?", likes: 7 },
        { id: 2, message: "It's my first post", likes: 11 },
        { id: 3, message: "What's up guys", likes: 25 },
      ],
      newPostText: "Hello, world!",
    },
    dialogsPage: {
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
    },
  },

  _callSubscriber: null,

  getState() {
    return this._state;
  },

  updateRerenderEntire(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
};
