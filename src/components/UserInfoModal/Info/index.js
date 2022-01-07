import "./info.scss";

import PropTypes from "prop-types";
import React from "react";
import { Col, Form, Row } from "react-bootstrap";

import Image from "../../Image";

const Info = props => {
  const { label, value, type } = props;
  return (
    <Form.Group as={Row} className="info-user">
      <Form.Label column xs="4">
        {label}
      </Form.Label>
      <Col xs="8">
        {type === "text" ? (
          <Form.Control
            data-test="info-text"
            plaintext
            readOnly
            defaultValue={value}
          />
        ) : type === "image" ? (
          <Image data-test="info-image" src={value} />
        ) : null}
      </Col>
    </Form.Group>
  );
};

Info.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string
};

Info.defaultProps = {
  label: "",
  value: "",
  type: "text"
};

export default Info;
