import PropsType from "prop-types";
import React from "react";

import { BAR, LINE } from "../../constants/chart";
import Bar from "./Bar";
// import Line from "./Line";

const Chart = props => {
  const { data, mode, color, height } = props;
  if (data.length === 0) {
    return <h3 data-test="invalid data">Please insert valid data</h3>;
  }

  return mode === BAR ? (
    <Bar data={data} color={color} height={height} />
  ) : null;
};

Chart.propTypes = {
  data: PropsType.array,
  height: PropsType.number,
  color: PropsType.string,
  mode: PropsType.oneOfType([BAR, LINE])
};

Chart.defaultProps = {
  data: [],
  height: 400,
  color: ""
};

export default Chart;
