import PropTypes from "prop-types";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import AuthenticatedUser from "../../models/AuthenticatedUser";
import Image from "../Image";

const AuthenticateMenu = props => {
  const { handleShowUserInfoModal, authenticateUser, logOut, login } = props;

  if (!authenticateUser) {
    return (
      <a data-test="login" onClick={login}>
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
            src={authenticateUser.getAvatar()}
            className="rounded-circle"
          />
          <span>{authenticateUser.getUsername()}</span>
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
  authenticateUser: PropTypes.instanceOf(AuthenticatedUser),
  logOut: PropTypes.func,
  login: PropTypes.func
};

AuthenticateMenu.defaultProps = {
  handleShowUserInfoModal: () => null,
  authenticateUser: null,
  logOut: () => null,
  login: () => null
};

export default AuthenticateMenu;
