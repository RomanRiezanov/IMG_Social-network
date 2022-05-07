import React from "react";
import classes from "./Profile.module.css";
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ postsData, addPost }) => {
  return (
    <div className={classes.main}>
      <ProfileInfo />
      <Posts postsData={postsData} addPost={addPost} />
    </div>
  );
};

export default Profile;
