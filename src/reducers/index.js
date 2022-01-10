import { combineReducers } from "redux";

import authenticate from "./auth/authenticate";

const AppReducer = combineReducers({
  authenticate
});

export default AppReducer;
