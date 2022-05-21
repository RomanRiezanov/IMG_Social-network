import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./redux/redux-store";
import { Provider } from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

const rerenderEntireTree = () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
};
rerenderEntireTree();

store.subscribe(() => {
  rerenderEntireTree();
});
