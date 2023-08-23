import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import logger from "redux-logger";
import userReducer from "./reducers/userReducer";
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger, thunk))
);

export default store;
