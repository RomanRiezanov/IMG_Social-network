import React from "react";
import Friends from "./Friends/Friends";
import MobileNavigation from "./MobileNavigation/MobileNavigation";
import classes from "./Nav.module.css";
import Navigation from "./Navigation/Navigation";

const Nav = ({ friends, navLinks }) => {
  return (
    <div className={classes.sideBar}>
      <Navigation navLinks={navLinks} />
      <MobileNavigation navLinks={navLinks} />
      <Friends friends={friends} />
    </div>
  );
};

export default Nav;
