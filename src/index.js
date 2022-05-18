import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = (state) => {
  root.render(<App state={state} dispatch={store.dispatch.bind(store)} />);
};
rerenderEntireTree(store.getState());

store.updateRerenderEntire(rerenderEntireTree);
