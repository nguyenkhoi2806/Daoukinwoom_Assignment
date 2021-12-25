import "./style.scss";

import { ResponsiveBar } from "@nivo/bar";
import PropsType from "prop-types";
import React from "react";

const Bar = props => {
  const { height, data, color } = props;
  return (
    <div className="chart-bar">
      <ResponsiveBar
        height={height}
        layout="vertical"
        margin={{
          top: 50,
          right: 60,
          bottom: 50,
          left: 60
        }}
        data={data}
        colors={[color]}
        label={country => country.data.value}
        keys={["value"]}
        indexBy="name"
        labelFormat={d => <tspan y={0}>{d}</tspan>}
      />
    </div>
  );
};

Bar.propTypes = {
  data: PropsType.array,
  height: PropsType.number,
  color: PropsType.string
};

Bar.defaultProps = {
  data: [],
  height: 400,
  color: ""
};

export default Bar;
