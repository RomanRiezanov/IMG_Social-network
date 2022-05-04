import React from 'react';
import classes from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { postsData } from '../../../..';

const Profile = () => {
  return (
    <div className={classes.main}>
      <ProfileInfo />
      <Posts postsData={postsData} />
    </div>
  );
};

export default Profile;
