import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";

import Loading from "../components/Loading";

const withLoading = WrappedComponent => {
  const withLoadingChildren = ({ isLoading, ...props }) => {
    return isLoading ? (
      <div className={classnames("loading-wrapper", props.loadingWrapperClass)}>
        <Loading />
      </div>
    ) : (
      <WrappedComponent {...props} />
    );
  };

  withLoadingChildren.propTypes = {
    isLoading: PropTypes.bool
  };

  withLoadingChildren.defaultProps = {
    isLoading: false
  };

  return withLoadingChildren;
};

export default withLoading;
