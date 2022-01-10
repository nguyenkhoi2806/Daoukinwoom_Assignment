import React, { useState } from "react";
import { connect } from "react-redux";

import { loadUserFromApi } from "../../actions/auth/authenticatedActions";
import LoginModal from "./";

const LoginModalContainer = props => {
  const { handleClose, dispatch, isSigning } = props;
  const [inputLogin, setInputs] = useState({});

  const handleChangeInput = (name, value) => {
    setInputs(state => ({ ...state, [name]: value }));
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

  return (
    <LoginModal
      handleSignIn={handleSignIn}
      handleClose={handleClose}
      handleChangeInput={handleChangeInput}
      inputLogin={inputLogin}
      isSigning={isSigning}
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
