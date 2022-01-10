import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { Modal } from "react-bootstrap";

import AuthenticatedUser from "../../models/AuthenticatedUser";
import Info from "./Info";

const UserInfoModal = props => {
  const { onHide, authenticatedUser } = props;

  return (
    <Modal size="lg" show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>User information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Info label="Name" value={authenticatedUser.getName()} />
        <Info label="Username" value={authenticatedUser.getUsername()} />
        <Info
          label="Avatar"
          type="image"
          value={authenticatedUser.getAvatar()}
        />
        <Info
          label="Created at"
          value={moment(authenticatedUser.getCreatedAt()).format("MM/DD/YYYY")}
        />
      </Modal.Body>
    </Modal>
  );
};

UserInfoModal.propTypes = {
  onHide: PropTypes.func,
  authenticatedUser: PropTypes.instanceOf(AuthenticatedUser)
};

UserInfoModal.defaultProps = {
  onHide: () => null
};

export default UserInfoModal;
