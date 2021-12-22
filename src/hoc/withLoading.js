import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import Loading from "../components/Loading";

const withLoading = (WrappedComponent, isLoading, ...props) => {
  return isLoading ? (
    <div className={classnames("loading-wrapper", props.loadingWrapperClass)}>
      <Loading />
    </div>
  ) : (
    <WrappedComponent {...props} />
  );
};
withLoading.propTypes = {
  isLoading: PropTypes.bool
};

withLoading.defaultProps = {
  isLoading: false
};

export default withLoading;
