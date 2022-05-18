import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";

function App({ state, dispatch }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Main
          sideBar={state.sideBar}
          profilePage={state.profilePage}
          dialogsPage={state.dialogsPage}
          dispatch={dispatch}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
