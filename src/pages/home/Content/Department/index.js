import "./department.scss";

import PropTypes from "prop-types";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Department = props => {
  const { leftHtml, rightHtml } = props;

  return (
    <div className="department">
      <Container>
        <Row>
          <Col md="6" className="department-left">
            {leftHtml}
          </Col>
          <Col md="6" className="department-right">
            {rightHtml}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

Department.propTypes = {
  name: PropTypes.string,
  leftHtml: PropTypes.node,
  rightHtml: PropTypes.node
};

Department.defaultProps = {
  name: "",
  leftHtml: null,
  rightHtml: null
};

export default Department;
