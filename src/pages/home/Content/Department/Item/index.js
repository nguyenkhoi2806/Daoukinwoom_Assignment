import "./styles.scss";

import PropsType from "prop-types";
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
  name: PropsType.string,
  description: PropsType.string
};

Item.defaultProps = {
  name: "",
  description: ""
};

export default Item;
