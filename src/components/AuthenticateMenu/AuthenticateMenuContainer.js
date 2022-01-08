import "./authenticate-menu.scss";

import React, { useEffect, useState } from "react";

import AuthApi from "../../api/AuthApi";
import withLoading from "../../hoc/withLoading";
import {
  clearUserData,
  loadUserFromStorage,
  saveUserToStorage
} from "../../localStorage";
import AuthenticatedUser from "../../models/AuthenticatedUser";
import UserInfoModal from "../UserInfoModal";
import AuthenticateMenu from ".";

const AuthenticateMenuWithLoading = withLoading(AuthenticateMenu);

const AuthenticateMenuContainer = () => {
  const [isShowUserInfoModal, setShowUserInfoModal] = useState(false);
  const [authenticateUser, setAuthenticateUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleShowUserInfoModal = () => {
    setShowUserInfoModal(!isShowUserInfoModal);
  };

  useEffect(() => {
    initializeAuthenticateUser();
  }, []);

  const initializeAuthenticateUser = () => {
    const userFromLocalStorage = loadUserFromStorage();
    if (userFromLocalStorage) {
      setAuthenticateUser(userFromLocalStorage);
    }
  };

  const loadUserFromApi = () => {
    return new Promise((resolve, reject) => {
      setIsLoading(true);
      AuthApi.login()
        .then(response => {
          const { data } = response;
          if (response.status === 200 && data) {
            setAuthenticateUser(AuthenticatedUser.create(data));
            saveUserToStorage({ data });
          }
          resolve(data);
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  const logOut = () => {
    return new Promise((resolve, reject) => {
      setIsLoading(true);
      clearUserData()
        .then(() => {
          setAuthenticateUser(null);
          resolve();
        })
        .catch(error => {
          reject(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    });
  };

  return (
    <>
      <AuthenticateMenuWithLoading
        isLoading={isLoading}
        handleShowUserInfoModal={handleShowUserInfoModal}
        authenticateUser={authenticateUser}
        logOut={logOut}
        login={loadUserFromApi}
      />
      {isShowUserInfoModal
        && authenticateUser && (
          <UserInfoModal
            onHide={handleShowUserInfoModal}
            authenticateUser={authenticateUser}
          />
        )}
    </>
  );
};

export default AuthenticateMenuContainer;
