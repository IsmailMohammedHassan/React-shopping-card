import { composeWithDevTools } from "redux-devtools-extension";

import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./Reducers/Reducer";
import reduxThunk from "redux-thunk";

const initState = {};
const enhancer = window.__REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initState,

  composeWithDevTools(applyMiddleware(reduxThunk))
);

export default store;
