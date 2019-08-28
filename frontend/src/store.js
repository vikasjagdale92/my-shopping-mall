//store.js

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootRudecer from "./reducers";

const initialState = {};

const store = createStore(
  rootRudecer,
  initialState,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
