import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = () => {
  return (
    <div className={classes.main}>
      <ProfileInfo />
      <PostsContainer />
    </div>
  );
};

export default Profile;
