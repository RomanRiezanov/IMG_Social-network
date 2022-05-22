import React from "react";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";
import classes from "./Nav.module.css";

const Nav = ({ friends, navLinks }) => {
  const SetClassName = (navData) => {
    return navData.isActive ? classes.active : classes.link;
  };
  return (
    <div className={classes.sideBar}>
      <nav className={classes.nav}>
        {navLinks.map((link) => (
          <div className={classes.item} key={link.id}>
            <NavLink to={link.to} className={SetClassName} alt={link.alt}>
              {link.name}
            </NavLink>
          </div>
        ))}
      </nav>
      <Friends friends={friends} />;
    </div>
  );
};

export default Nav;
