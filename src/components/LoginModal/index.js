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
    inputLogin,
    handleSignIn,
    isSigning
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
          value={inputLogin.username}
          onChange={handleChangeInput}
        />
        <Input
          type={PASSWORD}
          label="Password"
          value={inputLogin.password}
          onChange={handleChangeInput}
        />
      </Modal.Body>
      <Modal.Footer>
        <ButtonWithLoading
          isLoading={isSigning}
          variant="primary"
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
  inputLogin: PropTypes.object,
  isSigning: PropTypes.bool
};

LoginModal.defaultProps = {
  handleShowUserInfoModal: () => null,
  handleSignIn: () => null,
  handleChangeInput: () => null,
  inputLogin: { username: "", password: "" },
  isSigning: false
};

export default LoginModal;
