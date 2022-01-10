import "./authenticate-menu.scss";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import {
  initializeAuthenticateUser,
  logout
} from "../../actions/auth/authenticatedActions";
import withLoading from "../../hoc/withLoading";
import LoginModalContainer from "../LoginModal/LoginModalContainer";
import UserInfoModal from "../UserInfoModal";
import AuthenticateMenu from ".";

const AuthenticateMenuWithLoading = withLoading(AuthenticateMenu);

const AuthenticateMenuContainer = props => {
  const { dispatch, authenticatedUser } = props;
  const [isShowUserInfoModal, setShowUserInfoModal] = useState(false);
  const [isShowLoginModal, setIsShowLoginModal] = useState(false);

  const handleShowUserInfoModal = () => {
    setShowUserInfoModal(!isShowUserInfoModal);
  };

  const handleShowLoginModal = () => {
    setIsShowLoginModal(!isShowLoginModal);
  };

  useEffect(() => {
    dispatch(initializeAuthenticateUser());
  }, []);

  const handleLogOut = () => {
    dispatch(logout());
  };

  return (
    <>
      <AuthenticateMenuWithLoading
        handleShowUserInfoModal={handleShowUserInfoModal}
        authenticatedUser={authenticatedUser}
        logOut={handleLogOut}
        handleShowLoginModal={handleShowLoginModal}
      />
      {isShowUserInfoModal
        && authenticatedUser && (
          <UserInfoModal
            onHide={handleShowUserInfoModal}
            authenticatedUser={authenticatedUser}
          />
        )}

      {isShowLoginModal && (
        <LoginModalContainer handleClose={handleShowLoginModal} />
      )}
    </>
  );
};

const mapStateToProps = state => {
  const { authenticatedUser } = state.authenticate;

  return {
    authenticatedUser
  };
};

export default connect(mapStateToProps)(AuthenticateMenuContainer);
