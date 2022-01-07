import "./loading.scss";

import PropTypes from "prop-types";
import React from "react";
import { Container } from "react-bootstrap";

const Loading = props => {
  const { withContainer } = props;

  const buildLoader = () => {
    return (
      <div className="loader">
        <div className="loader__spinner" />
      </div>
    );
  };

  if (withContainer) {
    return (
      <Container>
        <div className="loading-wrapper">{buildLoader()}</div>
      </Container>
    );
  }

  return buildLoader();
};

Loading.defaultProps = {
  txt: "",
  withContainer: false
};

Loading.propTypes = {
  txt: PropTypes.string,
  withContainer: PropTypes.bool
};

export default Loading;
