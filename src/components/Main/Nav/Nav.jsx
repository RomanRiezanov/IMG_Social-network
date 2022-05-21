import React from "react";
import { NavLink } from "react-router-dom";
import StoreContext from "../../../StoreContext";
import Friends from "./Friends/Friends";
import classes from "./Nav.module.css";

const Nav = () => {
  const SetClassName = (navData) => {
    return navData.isActive ? classes.active : classes.link;
  };
  return (
    <div className={classes.sideBar}>
      <StoreContext.Consumer>
        {(store) => {
          const navLinks = store.getState().sideBar.navLinks;
          return (
            <>
              <nav className={classes.nav}>
                {navLinks.map((link) => (
                  <div className={classes.item}>
                    <NavLink
                      to={link.to}
                      className={SetClassName}
                      alt={link.alt}
                      id={link.id}
                    >
                      {link.name}
                    </NavLink>
                  </div>
                ))}
              </nav>
              <Friends friends={store.getState().sideBar.friends} />;
            </>
          );
        }}
      </StoreContext.Consumer>
    </div>
  );
};

export default Nav;
