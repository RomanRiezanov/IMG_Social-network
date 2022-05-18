const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const profileReducer = (state, action) => {
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
