import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import createDebounce from "redux-debounced";
import { Provider } from "react-redux";

import { reducer } from "./reducers/reducer";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";

const createStoreWithMiddleware = applyMiddleware(createDebounce())(
  createStore
);

const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();
