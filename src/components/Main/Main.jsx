import React from 'react';
import Nav from './Nav/Nav';
import Profile from './Profile/Profile';
import classes from './Main.module.css';

const Main = () => {
  return (
    <div className={classes.main}>
      <Nav />
      <Profile />
    </div>
  );
};

export default Main;
