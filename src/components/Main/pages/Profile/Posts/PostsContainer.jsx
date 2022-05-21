import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../../../redux/profile_reducer";
import StoreContext from "../../../../../StoreContext";
import Posts from "./Posts";

const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {(store) => {
        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        const postChange = (text) => {
          store.dispatch(onPostChangeActionCreator(text));
        };

        return (
          <Posts
            addPost={addPost}
            postChange={postChange}
            postsData={store.getState().profilePage.postsData}
            newPostText={store.getState().profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default PostsContainer;
