import PropTypes from "prop-types";
import React from "react";
import { Img } from "react-image";

import NotFondImage from "../../assets/images/not-found-image.jpg";
import Loading from "../Loading";

const Image = props => {
  const { url } = props;
  return (
    <Img
      src={url}
      loader={<Loading />}
      unloader={<img src={NotFondImage} />}
      decode={false}
    />
  );
};

Image.propTypes = {
  url: PropTypes.string
};

Image.propTypes = {
  url: PropTypes.string
};

export default Image;
