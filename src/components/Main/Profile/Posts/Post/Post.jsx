import React from 'react';
import classes from './Post.module.css';
import avatar from '../../../../../resources/media/avatar.jpg';

const Post = ({ ...props }) => {
  return (
    <div className={classes.post}>
      <img className={classes.img} src={avatar} alt="" />
      {props.message}
      <div>
        <span>{props.likesCounter} Likes</span>
      </div>
    </div>
  );
};

export default Post;
