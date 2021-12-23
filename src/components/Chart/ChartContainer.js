import "./style.scss";

import React from "react";
import { Col, Row } from "react-bootstrap";

import { BAR, CHART_MODE, LINE } from "../../constants/chart";
import { COLOR, SELECT, TEXT } from "../../constants/inputType";
import Input from "../Input";
import Bar from "./Bar";
import Line from "./Line";

class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "",
      data: "",
      color: "#00000"
    };
  }

  onChange = (file, value) => {
    this.setState({
      [file]: value
    });
  };

  render() {
    const { mode, data, color } = this.state;

    return (
      <div className="chart-container">
        <Row>
          <Col md={6}>
            <Input
              label="Mode"
              options={CHART_MODE}
              type={SELECT}
              value={mode}
              onChange={value => this.onChange("mode", value)}
            />
            <Input
              label="Data"
              type={TEXT}
              value={data}
              onChange={value => this.onChange("data", value)}
            />
            <Input
              label="Color"
              type={COLOR}
              value={color}
              onChange={value => this.onChange("color", value)}
            />
          </Col>
          <Col md={6}>
            <div className="chart-container__chart">
              {mode === BAR ? <Bar /> : mode === LINE ? <Line /> : null}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChartContainer;
