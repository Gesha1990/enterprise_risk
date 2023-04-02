import React from "react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { store } from "@/redux/store";
import "./index.css";

const rootElment = document.getElementById("root");

ReactDOM.createRoot(rootElment).render(
  <Provider store={store}>
    <HashRouter >
      <App />
    </HashRouter>
  </Provider>
);
