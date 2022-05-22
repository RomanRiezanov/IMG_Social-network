import { connect } from "react-redux";
import {
  addPostActionCreator,
  onPostChangeActionCreator,
} from "../../../../../redux/profile_reducer";
import Posts from "./Posts";

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => dispatch(addPostActionCreator()),
    postChange: (text) => dispatch(onPostChangeActionCreator(text)),
  };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
