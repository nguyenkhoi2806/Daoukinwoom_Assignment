import PropTypes from "prop-types";
import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const AuthenticateMenu = props => {
  const { handleShowUserInfoModal } = props;

  return (
    <DropdownButton
      className="authenticate-menu"
      align="end"
      title={
        <img
          src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
          width="40"
          height="40"
          className="rounded-circle"
        />
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
  handleShowUserInfoModal: PropTypes.func
};

AuthenticateMenu.defaultProps = {
  handleShowUserInfoModal: () => null
};

export default AuthenticateMenu;
