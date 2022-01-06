import moment from "moment";
import PropTypes from "prop-types";
import React from "react";
import { Modal } from "react-bootstrap";

import Info from "./Info";

const UserInfoModal = props => {
  const { onHide } = props;

  return (
    <Modal size="lg" show={true} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>User information</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Info label="Name" value="Jimmie Thompson" />
        <Info label="Username" value="Mona_Kassulke14" />
        <Info
          label="Avatar"
          type="image"
          value="https://cdn.fakercloud.com/avatars/sergeysafonov_128.jpg"
        />
        <Info
          label="created at"
          value={moment("2021-10-21T08:36:53.248Z").format("MM/DD/YYYY")}
        />
      </Modal.Body>
    </Modal>
  );
};

UserInfoModal.propTypes = {
  onHide: PropTypes.func
};

UserInfoModal.defaultProps = {
  onHide: () => null
};

export default UserInfoModal;
