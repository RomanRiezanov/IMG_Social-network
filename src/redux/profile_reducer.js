const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likes: 7 },
    { id: 2, message: "It's my first post", likes: 11 },
    { id: 3, message: "What's up guys", likes: 25 },
  ],
  newPostText: "Hello, world!",
};

export const profileReducer = (state = initialState, action) => {
  if (action.type === ADD_POST) {
    const post = {
      id: state.postsData.length + 1,
      message: state.newPostText,
      likes: 0,
    };
    return {
      ...state,
      postsData: [...state.postsData, post],
      newPostText: "",
    };
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    return {
      ...state,
      newPostText: action.text,
    };
  }
  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (message) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: message,
});
