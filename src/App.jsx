import React from "react";
import { BrowserRouter } from "react-router-dom";
import "../src/styles/globals.css";
import Main from "./components/Main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
