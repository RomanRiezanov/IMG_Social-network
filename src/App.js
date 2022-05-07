import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App({ state, addPost }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Main
          sideBar={state.sideBar}
          profilePage={state.profilePage}
          dialogsPage={state.dialogsPage}
          addPost={addPost}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
