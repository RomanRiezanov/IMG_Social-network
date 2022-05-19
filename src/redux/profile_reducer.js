const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initalState = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likes: 7 },
    { id: 2, message: "It's my first post", likes: 11 },
    { id: 3, message: "What's up guys", likes: 25 },
  ],
  newPostText: "Hello, world!",
};

export const profileReducer = (state = initalState, action) => {
  if (action.type === ADD_POST) {
    const post = {
      id: state.postsData.length + 1,
      message: state.newPostText,
      likes: 0,
    };
    state.postsData.push(post);
    state.newPostText = "";
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.text;
  }
  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const onPostChangeActionCreator = (message) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: message,
});
