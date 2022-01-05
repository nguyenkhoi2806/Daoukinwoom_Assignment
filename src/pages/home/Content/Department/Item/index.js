import "./styles.scss";

import PropTypes from "prop-types";
import React from "react";

const Item = props => {
  const { name, description } = props;
  return (
    <div className="department__item">
      <span
        className="department__item-content"
        dangerouslySetInnerHTML={{ __html: name }}
      />
      <span className="department__item-bottom"> {description} </span>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string
};

Item.defaultProps = {
  name: "",
  description: ""
};

export default Item;
