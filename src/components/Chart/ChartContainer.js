import React from "react";
import { FormSelect } from "react-bootstrap";

import { CHART_MODE } from "../../constants/chart";

class ChartContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "",
      data: ""
    };
  }

  render() {
    return (
      <FormSelect>
        {CHART_MODE.map((mode, key) => (
          <option key={`${mode}-${key}`}>{mode} </option>
        ))}
      </FormSelect>
    );
  }
}

export default ChartContainer;
