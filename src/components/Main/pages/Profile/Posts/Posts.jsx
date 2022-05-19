import React from "react";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = ({ postChange, addPost, postsData, newPostText }) => {
  const link = React.createRef();

  const onDddPost = () => {
    addPost();
  };

  const onPostChange = () => {
    postChange(link.current.value);
  };

  return (
    <div className={classes.posts}>
      <h2>Posts</h2>
      <div className={classes.addPost}>
        <div>
          <textarea
            onChange={onPostChange}
            ref={link}
            value={newPostText}
          ></textarea>
        </div>
        <div>
          <button onClick={onDddPost}>Add post</button>
        </div>
      </div>
      {postsData.map((post) => (
        <Post message={post.message} likesCounter={post.likes} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
