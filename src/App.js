import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App({ ...props }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Main
          sideBar={props.state.sideBar}
          profilePage={props.state.profilePage}
          dialogsPage={props.state.dialogsPage}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
