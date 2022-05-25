import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "../Nav.module.css";

const MobileNavigation = ({ navLinks }) => {
  const [open, setOpen] = useState(false);

  const SetClassName = (navData) => {
    return navData.isActive ? classes.active : classes.link;
  };
  return (
    <nav className={`${classes.nav} ${classes.mobNav}`}>
      <div className={classes.menu} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div
        className={
          open ? `${classes.navItems} ${classes.active}` : classes.navItems
        }
      >
        {navLinks.map((link) => (
          <div className={classes.item} key={link.id}>
            <NavLink to={link.to} className={SetClassName} alt={link.alt}>
              {link.name}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavigation;
