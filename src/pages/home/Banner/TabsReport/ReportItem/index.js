import PropTypes from "prop-types";
import React from "react";
import { Col } from "react-bootstrap";

const ReportItem = ({ number, description }) => {
  return (
    <Col>
      <div className="tab-report__item">
        <span className="tab-report__item-number">{number}</span>
        <span
          className="tab-report__item-description"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </Col>
  );
};

ReportItem.propTypes = {
  number: PropTypes.string,
  description: PropTypes.string
};

ReportItem.defaultProps = {
  number: "",
  description: ""
};

export default ReportItem;
