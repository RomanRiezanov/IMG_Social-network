import React from "react";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = ({ dispatch, store }) => {
  return (
    <div className={classes.main}>
      <ProfileInfo />
      <PostsContainer store={store} dispatch={dispatch} />
    </div>
  );
};

export default Profile;
