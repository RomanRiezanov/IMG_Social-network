import React from 'react';
import classes from './ProfileInfo.module.css';
import author from '../../../../../resources/media/author.png';
import nature from '../../../../../resources/media/nature-wallpaper.jpg';

const ProfileInfo = () => {
  return (
    <div>
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
    </div>
  );
};

export default ProfileInfo;
