import "./footer-item.scss";

import PropTypes from "prop-types";
import React from "react";
import { Col } from "react-bootstrap";

const FooterItem = props => {
  const { name, content, classNameWrapper } = props;
  return (
    <Col sm={4} md={4} lg={4} className={`footer-item ${classNameWrapper}`}>
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
  content: PropTypes.node,
  classNameWrapper: PropTypes.string
};

FooterItem.defaultProps = {
  name: "",
  content: null,
  classNameWrapper: ""
};

export default FooterItem;
