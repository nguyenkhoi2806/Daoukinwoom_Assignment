import "./price.scss";

import React from "react";
import { Container, Row } from "react-bootstrap";

import PriceItem from "./PriceItem";

const Price = () => {
  return (
    <div className="price-list">
      <Container className="price-list__container">
        <Row>
          <PriceItem
            name="Free Test"
            description="Organize across all apps by hand"
            money={0}
          />
          <PriceItem
            name="Low Price"
            description="Monthly Fixed Amount"
            money={200000}
          />
          <PriceItem
            classWrapper="active"
            name="Easy Using Methods"
            description="Various Manuals"
            money={200000}
          />
          <PriceItem
            classWrapper="verified"
            name="Verified IT Service"
            description="On sale in 4 countries"
            money={300000}
            currency="VND"
          />
        </Row>
      </Container>
    </div>
  );
};

export default Price;
