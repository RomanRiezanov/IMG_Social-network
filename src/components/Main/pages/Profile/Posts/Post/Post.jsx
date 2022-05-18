import React from "react";
import classes from "./Post.module.css";
import avatar from "../../../../../../resources/media/avatar.jpg";

const Post = ({ message, likesCounter }) => {
  return (
    <div className={classes.post}>
      <div className={classes.authorInfo}>
        <img className={classes.img} src={avatar} alt="author-avatar" />
        <div className={classes.about}>
          <div className={classes.name}>Irina Pchelnikova</div>
          <div className={classes.status}>
            <i className="fa fa-circle online"></i> online
          </div>
        </div>
      </div>
      <div className={classes.message}>
        {message}
        <div>
          <span>
            {likesCounter} <i className="fa fa-heart"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Post;
