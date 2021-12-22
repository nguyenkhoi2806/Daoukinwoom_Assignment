import PropsType from "prop-types";
import React from "react";
import { Form } from "react-bootstrap";

import { SELECT, TEXT } from "../../constants/inputType";
import Select from "./Select";
import Text from './Text'

const Input = (props) => {
  const { label, type } = props;
  let InputElement;
  if (type === SELECT) {
    InputElement = <Select {...props} />;
  } else if(type === TEXT){
      InputElement = <Text {...props} />
  }

  return (
    <Form.Group controlId="formFile" className="mb-3">
      <Form.Label>{label}</Form.Label>
      {InputElement}
    </Form.Group>
  );
};

Input.propTypes = {
  type: PropsType.string,
  label: PropsType.string,
};

Input.defaultProps = {
  label: "",
  type: "",
};

export default Input;
