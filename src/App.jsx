import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";

function App({ store, dispatch }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Main sideBar={store.sideBar} store={store} dispatch={dispatch} />
      </div>
    </BrowserRouter>
  );
}

export default App;
