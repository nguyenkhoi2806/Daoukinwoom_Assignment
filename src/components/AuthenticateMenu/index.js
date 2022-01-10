import PropTypes from "prop-types";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import AuthenticatedUser from "../../models/AuthenticatedUser";
import Image from "../Image";

const AuthenticateMenu = props => {
  const {
    handleShowUserInfoModal,
    authenticatedUser,
    logOut,
    handleShowLoginModal
  } = props;

  if (!authenticatedUser.isAuthenticated()) {
    return (
      <a data-test="login" onClick={handleShowLoginModal}>
        Login
      </a>
    );
  }

  return (
    <DropdownButton
      data-test="authenticate-menu"
      className="authenticate-menu"
      align="end"
      title={
        <>
          <Image
            src={authenticatedUser.getAvatar()}
            className="rounded-circle"
          />
          <span>{authenticatedUser.getUsername()}</span>
        </>
      }
    >
      <Dropdown.Item
        className="authenticate-menu__item"
        onClick={handleShowUserInfoModal}
      >
        My information
      </Dropdown.Item>
      <Dropdown.Item className="authenticate-menu__item" onClick={logOut}>
        Logout
      </Dropdown.Item>
    </DropdownButton>
  );
};

AuthenticateMenu.propTypes = {
  handleShowUserInfoModal: PropTypes.func,
  authenticatedUser: PropTypes.instanceOf(AuthenticatedUser),
  logOut: PropTypes.func,
  handleShowLoginModal: PropTypes.func
};

AuthenticateMenu.defaultProps = {
  handleShowUserInfoModal: () => null,
  authenticatedUser: null,
  logOut: () => null,
  login: () => null,
  handleShowLoginModal: () => null
};

export default AuthenticateMenu;
