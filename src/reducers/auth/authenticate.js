import {
  LOGOUT_USER,
  SET_AUTHENTICATED_USER_INFO,
  SET_IS_SIGNING
} from "../../constants/auth/authenticatedUserTypes";
import { clearUserData, saveUserToStorage } from "../../localStorage";
import AuthenticatedUser from "../../models/AuthenticatedUser";

const initialState = {
  authenticatedUser: new AuthenticatedUser(),
  isSigning: false
};

const authenticatedUser = (state = initialState, action = null) => {
  switch (action.type) {
    case SET_AUTHENTICATED_USER_INFO:
      saveUserToStorage(action.payload);
      return {
        ...state,
        authenticatedUser: action.payload
      };
    case SET_IS_SIGNING:
      return {
        ...state,
        isSigning: action.payload
      };
    case LOGOUT_USER:
      clearUserData();
      return initialState;
    default:
  }

  return state;
};

export default authenticatedUser;
