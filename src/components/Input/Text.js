import PropsType from "prop-types";
import React from "react";
import { Form } from "react-bootstrap";

const Text = (props) => {
  const { onChange, value } = props;
  return <Form.Control onChange={onChange} type="text" value={value} />;
};

Text.propTypes = {
  options: PropsType.array,
  onChange: PropsType.func.isRequired,
  value: PropsType.string
};

Text.defaultProps = {
  options: [],
  value: ''
};

export default Text;
