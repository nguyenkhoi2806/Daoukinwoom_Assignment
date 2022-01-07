import PropTypes from "prop-types";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

import AuthenticatedUser from "../../models/AuthenticatedUser";
import Image from "../Image";

const AuthenticateMenu = props => {
  const { handleShowUserInfoModal, authenticateUser } = props;

  return (
    <DropdownButton
      className="authenticate-menu"
      align="end"
      title={
        <Image src={authenticateUser.getAvatar()} className="rounded-circle" />
      }
    >
      <Dropdown.Item
        className="authenticate-menu__item"
        onClick={handleShowUserInfoModal}
      >
        My information
      </Dropdown.Item>
      <Dropdown.Item className="authenticate-menu__item" href="#/action-2">
        Logout
      </Dropdown.Item>
    </DropdownButton>
  );
};

AuthenticateMenu.propTypes = {
  handleShowUserInfoModal: PropTypes.func,
  authenticateUser: PropTypes.instanceOf(AuthenticatedUser).isRequired
};

AuthenticateMenu.defaultProps = {
  handleShowUserInfoModal: () => null
};

export default AuthenticateMenu;
