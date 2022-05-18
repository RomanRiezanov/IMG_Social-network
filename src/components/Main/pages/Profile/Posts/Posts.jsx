import React from "react";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../../../redux/profile_reducer";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = ({ ...props }) => {
  const link = React.createRef();
  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    props.dispatch(onPostChangeActionCreator(link.current.value));
  };

  return (
    <div className={classes.posts}>
      <h2>Posts</h2>
      <div className={classes.addPost}>
        <div>
          <textarea
            onChange={onPostChange}
            ref={link}
            value={props.newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {props.postsData.map((post) => (
        <Post message={post.message} likesCounter={post.likes} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
