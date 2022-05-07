import React from "react";
import classes from "./Post.module.css";
import avatar from "../../../../../../resources/media/avatar.jpg";

const Post = ({ message, likesCounter }) => {
  return (
    <div className={classes.post}>
      <img className={classes.img} src={avatar} alt="" />
      {message}
      <div>
        <span>{likesCounter} Likes</span>
      </div>
    </div>
  );
};

export default Post;
