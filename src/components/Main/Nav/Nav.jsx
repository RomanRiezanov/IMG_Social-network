import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div className={classes.item}>
        <NavLink
          to="/profile"
          className={(navData) =>
            navData.isActive ? classes.active : classes.link
          }
          alt="messages-link"
        >
          Profile
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/dialogs"
          className={(navData) =>
            navData.isActive ? classes.active : classes.link
          }
          alt="messages-link"
        >
          Messages
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/news"
          className={(navData) =>
            navData.isActive ? classes.active : classes.link
          }
          alt="messages-link"
        >
          News
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/music"
          className={(navData) =>
            navData.isActive ? classes.active : classes.link
          }
          alt="messages-link"
        >
          Music
        </NavLink>
      </div>
      <div className={classes.item}>
        <NavLink
          to="/settings"
          className={(navData) =>
            navData.isActive ? classes.active : classes.link
          }
          alt="messages-link"
        >
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
