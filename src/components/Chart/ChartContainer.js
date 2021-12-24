import "./style.scss";

import React from "react";
import { Col, Row } from "react-bootstrap";

import { CHART_MODE } from "../../constants/chart";
import { COLOR, SELECT, TEXT } from "../../constants/inputType";
import { getCountryWithLimit } from "../../services/data";
import Input from "../Input";
import Bar from "./Bar";

class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "",
      data: "",
      color: "#00000",
      dataObject: []
    };
  }

  onChange = (field, value) => {
    this.setState(
      {
        [field]: value
      },
      () => {
        if (field === "data") {
          this.updateDataObject(value);
        }
      }
    );
  };

  updateDataObject = data => {
    const dataArray = data.split(",");
    this.setState({
      dataObject: getCountryWithLimit(dataArray.length).map((country, index) =>
        country.set("value", dataArray[index])
      )
    });
  };

  render() {
    const { mode, data, color, dataObject } = this.state;
    console.log(dataObject);
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
              <Bar />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ChartContainer;
