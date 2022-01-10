import PropTypes from "prop-types";
import React from "react";
import { Button, Modal } from "react-bootstrap";

import { PASSWORD, TEXT } from "../../constants/inputType";
import withLoading from "../../hoc/withLoading";
import Input from "../Input";

const ButtonWithLoading = withLoading(Button);

const LoginModal = props => {
  const {
    handleClose,
    handleChangeInput,
    username,
    password,
    handleSignIn,
    isSigning,
    canSignIn
  } = props;

  return (
    <Modal show={true} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          type={TEXT}
          label="User name"
          value={username}
          onChange={event => handleChangeInput("username", event.target.value)}
        />
        <Input
          type={PASSWORD}
          label="Password"
          value={password}
          onChange={event => handleChangeInput("password", event.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <ButtonWithLoading
          isLoading={isSigning}
          variant="primary"
          disabled={!canSignIn}
          onClick={handleSignIn}
        >
          Sign in
        </ButtonWithLoading>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

LoginModal.propTypes = {
  handleClose: PropTypes.func,
  handleSignIn: PropTypes.func,
  handleChangeInput: PropTypes.func,
  username: PropTypes.string,
  password: PropTypes.string,
  isSigning: PropTypes.bool,
  canSignIn: PropTypes.bool
};

LoginModal.defaultProps = {
  handleShowUserInfoModal: () => null,
  handleSignIn: () => null,
  handleChangeInput: () => null,
  username: "",
  password: "",
  isSigning: false,
  canSignIn: false
};

export default LoginModal;
