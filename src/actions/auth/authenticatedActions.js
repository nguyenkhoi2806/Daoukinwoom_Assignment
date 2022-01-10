import AuthApi from "../../api/AuthApi";
import {
  LOGOUT_USER,
  SET_AUTHENTICATED_USER_INFO,
  SET_IS_SIGNING
} from "../../constants/auth/authenticatedUserTypes";
import { loadUserFromStorage, saveUserToStorage } from "../../localStorage";
import AuthenticatedUser from "../../models/AuthenticatedUser";

export const loadUserFromApi = () => dispatch => {
  return new Promise((resolve, reject) => {
    dispatch(setIsSigningIn(true));
    AuthApi.login()
      .then(response => {
        const { data } = response;
        if (response.status === 200 && data) {
          dispatch(setAuthenticateUser(AuthenticatedUser.create(data)));
          saveUserToStorage({ data });
        }
        resolve(data);
      })
      .catch(error => {
        reject(error);
      })
      .finally(() => {
        dispatch(setIsSigningIn(false));
      });
  });
};

const setAuthenticateUser = payload => {
  return {
    type: SET_AUTHENTICATED_USER_INFO,
    payload
  };
};

export const setIsSigningIn = payload => {
  return { type: SET_IS_SIGNING, payload };
};

export function logout(payload) {
  return { type: LOGOUT_USER, payload };
}

export const initializeAuthenticateUser = () => dispatch => {
  const userFromLocalStorage = loadUserFromStorage();
  if (userFromLocalStorage) {
    dispatch(setAuthenticateUser(userFromLocalStorage));
  }
};
