import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./users";

const rootReducer = combineReducers({
  user: user.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
