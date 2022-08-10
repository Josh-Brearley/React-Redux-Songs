import React from "react";
import ReactDOM from "react-dom/client";
import {createStore} from 'redux'
import { Provider } from "react-redux";
import reducers from "./reducers";
import App from "./components/App";

// As of React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>
);
