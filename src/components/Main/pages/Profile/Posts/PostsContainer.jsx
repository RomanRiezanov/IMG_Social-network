import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../../../redux/profile_reducer";
import Posts from "./Posts";

const PostsContainer = ({ store, dispatch }) => {
  const addPost = () => {
    dispatch(addPostActionCreator());
  };

  const postChange = (text) => {
    dispatch(onPostChangeActionCreator(text));
  };

  return (
    <Posts
      addPost={addPost}
      postChange={postChange}
      postsData={store.profilePage.postsData}
      newPostText={store.profilePage.newPostText}
    />
  );
};

export default PostsContainer;
