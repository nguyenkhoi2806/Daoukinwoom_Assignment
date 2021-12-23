import { ResponsiveBar } from "@nivo/bar";
import PropsType from "prop-types";
import React from "react";

const Line = props => {
  const { height, width } = props;
  return (
    <ResponsiveBar
      data={[
        {
          burger: 95,
          burgerColor: "hsl(99, 70%, 50%)",
          sandwich: 23,
          sandwichColor: "hsl(93, 70%, 50%)",
          kebab: 32,
          kebabColor: "hsl(163, 70%, 50%)",
          fries: 27,
          friesColor: "hsl(227, 70%, 50%)",
          donut: 137,
          donutColor: "hsl(333, 70%, 50%)"
        }
      ]}
      keys={["burger", "sandwich", "kebab", "fries", "donut"]}
      height={height}
      width={width}
      itemWidth={100}
      itemHeight={20}
    />
  );
};

Line.propTypes = {
  data: PropsType.array,
  height: PropsType.number,
  width: PropsType.number
};

Line.defaultProps = {
  data: [],
  height: 400,
  with: 600
};

export default Line;
