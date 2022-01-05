import "./style.scss";

import PropTypes from "prop-types";
import React from "react";
import { Col } from "react-bootstrap";

const FooterItem = props => {
  const { name, content } = props;
  return (
    <Col sm={6} md={4} lg={4} className="footer-item">
      <div className="footer-item__content">
        <span className="footer-item__content-name">{name}</span>
        <div className="footer-item__content-detail">
          <ul>{content}</ul>
        </div>
      </div>
    </Col>
  );
};

FooterItem.propTypes = {
  name: PropTypes.string,
  content: PropTypes.node
};

FooterItem.defaultProps = {
  name: "",
  content: null
};

export default FooterItem;
