import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import ConfigureStore from "./Stores/configureStore";
import { BrowserRouter, Route } from "react-router-dom";
export const storess = ConfigureStore();
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storess}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
