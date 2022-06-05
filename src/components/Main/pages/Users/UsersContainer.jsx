import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
} from "../../../../redux/users_reducer";
import Users from "./Users";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => dispatch(followActionCreator(userId)),
    unfollow: (userId) => dispatch(unfollowActionCreator(userId)),
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;
