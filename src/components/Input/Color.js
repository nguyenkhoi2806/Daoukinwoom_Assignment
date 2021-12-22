import PropsType from "prop-types";
import React from "react";

const Color = props => {
  const { onChange, value } = props;
  return (
    <input
      onChange={onChange}
      type="color"
      className="form-control form-control-color"
      id="exampleColorInput"
      value={value}
      title="Choose your color"
    />
  );
};

Color.propTypes = {
  onChange: PropsType.func.isRequired,
  value: PropsType.string
};

Color.defaultProps = {
  value: ""
};

export default Color;
