import React from "react";
import classes from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ ...props }) => {
  return (
    <div className={classes.main}>
      <ProfileInfo />
      <Posts
        postsData={props.postsData}
        newPostText={props.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
