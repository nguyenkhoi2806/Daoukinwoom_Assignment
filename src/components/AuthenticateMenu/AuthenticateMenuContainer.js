import "./authenticate-menu.scss";

import React, { useEffect, useState } from "react";

import AuthApi from "../../api/AuthApi";
import UserInfoModal from "../UserInfoModal";
import AuthenticateMenu from ".";

const AuthenticateMenuContainer = () => {
  const [isShowUserInfoModal, setShowUserInfoModal] = useState(false);

  const handleShowUserInfoModal = () => {
    setShowUserInfoModal(!isShowUserInfoModal);
  };

  useEffect(() => {
    return new Promise((resolve, reject) => {
      AuthApi.login()
        .then(response => {
          console.log(response);
          resolve();
        })
        .catch(error => {
          reject(error);
        });
    });
  }, []);

  return (
    <>
      <AuthenticateMenu handleShowUserInfoModal={handleShowUserInfoModal} />
      {isShowUserInfoModal && (
        <UserInfoModal onHide={handleShowUserInfoModal} />
      )}
    </>
  );
};

export default AuthenticateMenuContainer;
