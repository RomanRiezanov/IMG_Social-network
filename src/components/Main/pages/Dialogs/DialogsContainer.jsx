import { connect } from "react-redux";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    dialogs: state.dialogsPage.dialogs,
  };
};

const DialogsContainer = connect(mapStateToProps)(Dialogs);

export default DialogsContainer;
