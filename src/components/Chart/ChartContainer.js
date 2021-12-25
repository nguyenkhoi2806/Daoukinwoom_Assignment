import "./style.scss";

import React from "react";
import { Col, Row } from "react-bootstrap";

import { CHART_COLOR_DEFAULT, CHART_MODE } from "../../constants/chart";
import { COLOR, SELECT, TEXT } from "../../constants/inputType";
import {
  formatDataCountryForBarChart
  //  getCountryWithLimit,
} from "../../services/data";
import Input from "../Input";
import Chart from ".";

class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "",
      data: "",
      color: CHART_COLOR_DEFAULT
    };
  }

  onChange = (field, value) => {
    this.setState({
      [field]: value
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
            <Chart
              mode={mode}
              data={formatDataCountryForBarChart(data)}
              color={color}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChartContainer;
