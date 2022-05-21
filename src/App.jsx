import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./components/Main/Main";

function App({ store }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
