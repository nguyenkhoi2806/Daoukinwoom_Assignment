import PropsType from "prop-types";
import React, { Component } from "react";
import { Form } from "react-bootstrap";

import { SELECT } from "../../constants/inputType";
import Select from "./Select";

class Input extends Component {
  onChange = event => {
    const { onChange } = this.props;
    return onChange(event.target.value);
  };

  render() {
    const { label, type, classNameWrapper } = this.props;
    let InputElement;
    if (type === SELECT) {
      InputElement = <Select {...this.props} onChange={this.onChange} />;
    } else {
      InputElement = (
        <Form.Control type={type} {...this.props} onChange={this.onChange} />
      );
    }

    return (
      <Form.Group controlId="formFile" className={classNameWrapper}>
        {label && <Form.Label>{label}</Form.Label>}
        {InputElement}
      </Form.Group>
    );
  }
}

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
