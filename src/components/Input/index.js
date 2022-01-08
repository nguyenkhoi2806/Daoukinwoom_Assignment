import PropsType from "prop-types";
import React from "react";
import { Form } from "react-bootstrap";

import { SELECT } from "../../constants/inputType";
import Select from "./Select";

const Input = props => {
  const onChangeInput = event => {
    const { onChange } = props;
    return onChange(event.target.value);
  };

  const { label, type, classNameWrapper } = props;
  let InputElement;
  if (type === SELECT) {
    InputElement = (
      <Select {...props} onChange={onChangeInput} data-test="select" />
    );
  } else {
    InputElement = (
      <Form.Control
        type={type}
        onChange={onChangeInput}
        {...props}
        data-test={type}
      />
    );
  }

  return (
    <Form.Group className={"form-group " + classNameWrapper}>
      {label && <Form.Label>{label}</Form.Label>}
      {InputElement}
    </Form.Group>
  );
};

Input.propTypes = {
  type: PropsType.string,
  label: PropsType.string,
  onChange: PropsType.func.isRequired,
  classNameWrapper: PropsType.string
};

Input.defaultProps = {
  label: "",
  type: "",
  onChange: () => null,
  classNameWrapper: ""
};

export default Input;
