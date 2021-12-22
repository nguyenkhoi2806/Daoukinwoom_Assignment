import "./style.scss";

import React from "react";
import { Col, Row } from "react-bootstrap";

import { CHART_MODE } from "../../constants/chart";
import { SELECT, TEXT } from "../../constants/inputType";
import Input from "../Input";

class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "",
      data: "",
    };
  }

  render() {
    const { mode, data } = this.state;

    return (
      <div className="chart-container">
        <Row>
          <Col md={6}>
            <Input
              label="Mode"
              options={CHART_MODE}
              type={SELECT}
              value={mode}
            />
            <Input label="Data" type={TEXT} value={data} />
          </Col>
          <Col md={6}>
            <div className="chart-container__chart" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChartContainer;
