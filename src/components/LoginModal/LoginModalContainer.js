import React, { useState } from "react";
import { connect } from "react-redux";

import { loadUserFromApi } from "../../actions/auth/authenticatedActions";
import LoginModal from "./";

const LoginModalContainer = props => {
  const { handleClose, dispatch, isSigning } = props;
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeInput = (name, value) => {
    if (name === "username") {
      setUserName(value);
    } else {
      setPassword(value);
    }
  };

  const handleSignIn = () => {
    dispatch(loadUserFromApi())
      .then(() => {
        handleClose();
      })
      .catch(err => {
        console.log(err);
      });
  };

  const canSignIn = () => {
    return username !== "" && password !== "";
  };

  return (
    <LoginModal
      handleSignIn={handleSignIn}
      handleClose={handleClose}
      handleChangeInput={handleChangeInput}
      password={password}
      username={username}
      isSigning={isSigning}
      canSignIn={canSignIn()}
    />
  );
};

const mapStateToProps = state => {
  const { authenticatedUser, isSigning } = state.authenticate;

  return {
    authenticatedUser,
    isSigning
  };
};

export default connect(mapStateToProps)(LoginModalContainer);
