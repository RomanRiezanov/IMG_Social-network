import { connect } from "react-redux";
import Nav from "./Nav";

const mapStateToProps = (state) => {
  return {
    friends: state.sideBar.friends,
    navLinks: state.sideBar.navLinks,
  };
};

const NavContainer = connect(mapStateToProps)(Nav);

export default NavContainer;
