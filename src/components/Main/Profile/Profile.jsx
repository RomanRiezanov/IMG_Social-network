import React from 'react';
import nature from '../../../resources/media/nature-wallpaper.jpg';
import author from '../../../resources/media/author.png';
import classes from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = () => {
  return (
    <div className={classes.main}>
      <div className={classes.block}>
        <img className={classes.img} src={nature} alt="nature" />
      </div>
      <div>
        <div className={classes.profile}>
          <div className={classes.author}>
            <img src={author} alt="author" className={classes.authorImg} />
          </div>
          <div>
            <h2>Roman R.</h2>
            <p>Date of Birth: 26 June</p>
            <p>City: Kharkiv</p>
            <p>Education: NTU "KHPI"</p>
          </div>
        </div>
      </div>
      <Posts />
    </div>
  );
};

export default Profile;
