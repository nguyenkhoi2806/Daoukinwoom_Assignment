import "./authenticate-menu.scss";

import React, { useEffect, useState } from "react";

import AuthApi from "../../api/AuthApi";
import withLoading from "../../hoc/withLoading";
import { loadUserFromStorage, saveUserToStorage } from "../../localStorage";
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
    const userFromLocalStorage = loadUserFromStorage();
    if (userFromLocalStorage) {
      setAuthenticateUser(userFromLocalStorage);
    } else {
      loadUserFromApi();
    }
  }, []);

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

  if (!authenticateUser) {
    return null;
  }

  return (
    <>
      <AuthenticateMenuWithLoading
        isLoading={isLoading}
        handleShowUserInfoModal={handleShowUserInfoModal}
        authenticateUser={authenticateUser}
      />
      {isShowUserInfoModal && (
        <UserInfoModal
          onHide={handleShowUserInfoModal}
          authenticateUser={authenticateUser}
        />
      )}
    </>
  );
};

export default AuthenticateMenuContainer;
