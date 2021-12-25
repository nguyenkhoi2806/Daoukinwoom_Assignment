import _ from "lodash";

import { convertStringToArrayByComas } from "./format";

export const isNumberValid = string => {
  const matches = string.toString().match(/^[0-9]+$/);
  return Boolean(matches && matches.length > 0);
};

export const isValidDataChart = string => {
  if (_.isArray(string) || isNumberValid(string)) {
    return true;
  } else if (string.indexOf(",") > -1) {
    const splitStringToArray = convertStringToArrayByComas(string);
    if (splitStringToArray.every(string => !isNumberValid(string))) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};
