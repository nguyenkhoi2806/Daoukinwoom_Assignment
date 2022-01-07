import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { Modal } from "react-bootstrap";

import AuthenticatedUser from "../../models/AuthenticatedUser";
import Info from "./Info";

const UserInfoModal = props => {
  const { onHide, authenticateUser } = props;

  return (
    <Modal size="lg" show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>User information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Info label="Name" value={authenticateUser.getName()} />
        <Info label="Username" value={authenticateUser.getUsername()} />
        <Info
          label="Avatar"
          type="image"
          value={authenticateUser.getAvatar()}
        />
        <Info
          label="Created at"
          value={moment(authenticateUser.getCreatedAt()).format("MM/DD/YYYY")}
        />
      </Modal.Body>
    </Modal>
  );
};

UserInfoModal.propTypes = {
  onHide: PropTypes.func,
  authenticateUser: PropTypes.instanceOf(AuthenticatedUser)
};

UserInfoModal.defaultProps = {
  onHide: () => null
};

export default UserInfoModal;
