import "./style.scss";

import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import { Col } from "react-bootstrap";

import Dollar from "../../../../assets/images/dollar.png";

const PriceItem = props => {
  const { name, description, money, classWrapper, currency } = props;
  return (
    <Col sm={6} md={6} lg={3} className="price">
      <div className={`price-item price-item--${classWrapper}`}>
        <span className="price-item__name">
          <strong>{name}</strong>
          <span className="price-item__name-detail">{description}</span>
        </span>
        <span className="price-item__money">
          <span
            className={classnames("price-item__money-number ", {
              "price-item__money-number-free": money === 0
            })}
          >
            {money}
          </span>
          <span className="price-item__money-currency">
            <span className="price-item__money-currency-name">{currency}</span>
            <span className="price-item__money-currency-month">Per Month</span>
          </span>
        </span>
      </div>
    </Col>
  );
};

PriceItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  money: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  classWrapper: PropTypes.string,
  currency: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
};

PriceItem.defaultProps = {
  name: "",
  description: "",
  money: 0,
  classWrapper: "",
  currency: <img src={Dollar} />
};

export default PriceItem;
