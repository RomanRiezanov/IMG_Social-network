import React from 'react';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <a className={classes.link} alt="messages-link">
          Profile
        </a>
      </div>
      <div className={classes.item}>
        <a className={classes.link} alt="messages-link">
          Messages
        </a>
      </div>
      <div className={classes.item}>
        <a className={classes.link} alt="messages-link">
          News
        </a>
      </div>
      <div className={classes.item}>
        <a className={classes.link} alt="messages-link">
          Music
        </a>
      </div>
      <div className={classes.item}>
        <a className={classes.link} alt="messages-link">
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Nav;
