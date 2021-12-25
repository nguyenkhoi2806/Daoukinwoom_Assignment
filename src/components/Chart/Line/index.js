//import { ResponsiveLine } from "@nivo/line";
//import { hexToHsl } from "hex-to-hsl";
import PropsType from "prop-types";
//import React from "react";

const Line = () => {
  return null;
};

Line.propTypes = {
  data: PropsType.array,
  height: PropsType.number,
  color: PropsType.string
};

Line.defaultProps = {
  data: [],
  height: 400,
  color: ""
};

export default Line;
