import _ from "lodash";

export const convertStringToArrayByComas = string => {
  return _.split(string, ",");
};

export const formaToValidNumberArray = array => {
  return array.map(element => {
    console.log(element);
    if (element.indexOf("[") > 0) {
      element.replace("[", "");
    } else if (element.indexOf("]") > 0) {
      element.replace("]", "");
    }
    return element;
  });
};
