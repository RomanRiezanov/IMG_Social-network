import React from "react";
import Post from "./Post/Post";
import classes from "./Posts.module.css";

const Posts = ({ ...props }) => {
  const link = React.createRef();

  const addPost = () => {
    console.log(link.current.value);
    props.addPost(link.current.value);
  };

  return (
    <div className={classes.posts}>
      <h2>Posts</h2>
      <div className={classes.addPost}>
        <div>
          <textarea
            ref={link}
            name="add new post"
            id=""
            cols="50"
            rows="5"
          ></textarea>
        </div>
        <div>
          <button onClick={() => addPost(link.current.value)}>Add post</button>
        </div>
      </div>
      {props.postsData.map((post) => (
        <Post message={post.message} likesCounter={post.likes} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
