import { createStore, compose, applyMiddleware } from "redux";

import rootReducer from "./reducers";

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, initialState);
