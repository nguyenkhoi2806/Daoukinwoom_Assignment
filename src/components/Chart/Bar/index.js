import "./style.scss";

import { ResponsiveBar } from "@nivo/bar";
import PropsType from "prop-types";
import React from "react";
let data = [
  {
    id: "One Plus",
    label: "Apple",
    value: 350
  },
  {
    id: "Samsung",
    label: "Samsung",
    value: 280
  },
  {
    id: "Nokia  C",
    label: "Nokia",
    value: 20
  }
];

const Bar = props => {
  data = data.sort((a, b) => a.value - b.value);
  const { height } = props;

  return (
    <div className="chart-bar">
      <ResponsiveBar
        height={height}
        layout="vertical"
        margin={{
          top: 15,
          right: 0,
          bottom: 5,
          left: 35
        }}
        data={data}
        colors={["#cce4f2"]}
        label={label => label.data.id}
      />
    </div>
  );
};

Bar.propTypes = {
  data: PropsType.array,
  height: PropsType.number
};

Bar.defaultProps = {
  data: [],
  height: 400
};

export default Bar;
