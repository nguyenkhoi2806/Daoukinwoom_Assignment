import PropsType from "prop-types";
import React, { Component } from "react";
import { Form } from "react-bootstrap";

import { COLOR, SELECT } from "../../constants/inputType";
import Color from "./Color";
import Select from "./Select";

class Input extends Component {
  onChange = event => {
    const { onChange } = this.props;
    return onChange(event.target.value);
  };

  render() {
    const { label, type } = this.props;
    let InputElement;
    if (type === SELECT) {
      InputElement = <Select {...this.props} onChange={this.onChange} />;
    } else if (type === COLOR) {
      InputElement = <Color {...this.props} onChange={this.onChange} />;
    } else {
      InputElement = (
        <Form.Control type={type} {...this.props} onChange={this.onChange} />
      );
    }

    return (
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>{label}</Form.Label>
        {InputElement}
      </Form.Group>
    );
  }
}

Input.propTypes = {
  type: PropsType.string,
  label: PropsType.string,
  onChange: PropsType.func.isRequired
};

Input.defaultProps = {
  label: "",
  type: "",
  onChange: () => null
};

export default Input;
