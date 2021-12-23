import _ from "lodash";

import DataCountry from "../country.json";

export const getAllCountry = () => {
  return Object.keys(DataCountry).map(index => DataCountry[index]);
};

export const getRandomCountry = () => {
  return _.shuffle(getAllCountry());
};
