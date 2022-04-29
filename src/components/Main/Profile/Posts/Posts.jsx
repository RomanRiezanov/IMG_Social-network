import React from 'react';
import Post from './Post/Post';
import classes from './Posts.module.css';

const Posts = () => {
  return (
    <div>
      Posts
      <div>
        <textarea name="add new post" id="" cols="50" rows="5"></textarea>
        <button>Add post</button>
      </div>
      <Post message="Hi, how are you?" likesCounter="7" />
      <Post message="It's my first post" likesCounter="11" />
      <Post message="What's up guys" likesCounter="25" />
    </div>
  );
};

export default Posts;
