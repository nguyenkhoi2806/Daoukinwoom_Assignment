import PropTypes from "prop-types";
import React from "react";
import { Img } from "react-image";

import NotFondImage from "../../assets/images/not-found-image.jpg";
import Loading from "../Loading";

const Image = props => {
  const { url, className } = props;
  return (
    <Img
      src={url}
      loader={<Loading />}
      unloader={<img src={NotFondImage} className={className} />}
      decode={false}
      className={className}
    />
  );
};

Image.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string
};

Image.defaultProps = {
  url: "",
  className: ""
};

export default Image;
