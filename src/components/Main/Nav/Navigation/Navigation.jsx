import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../Nav.module.css";

const Navigation = ({ navLinks }) => {
  const SetClassName = (navData) => {
    return navData.isActive ? classes.active : classes.link;
  };
  return (
    <nav className={classes.nav}>
      {navLinks.map((link) => (
        <div className={classes.item} key={link.id}>
          <NavLink to={link.to} className={SetClassName} alt={link.alt}>
            {link.name}
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
