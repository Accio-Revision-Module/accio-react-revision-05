/* eslint-disable no-unused-vars */
import logger from "redux-logger";
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const customLogger = (store) => (next) => (action) => {
  console.log("State of app: ", store.getState());
  console.log("Dispatching an action: ", action);
  return next(action);
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: userReducer,
  },
  middleware: [logger, customLogger, thunk],
});

export default store;
