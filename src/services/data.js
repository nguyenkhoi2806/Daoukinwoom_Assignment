import _ from "lodash";

import DataCountry from "../country.json";
import Country from "../models/Country";
import { convertStringToArrayByComas, formaToValidNumberArray } from "./format";
//import { convertStringToArray } from "./array";
import { isValidDataChart } from "./validator";

export const getAllCountry = () => {
  return Object.keys(DataCountry).map(index => new Country(DataCountry[index]));
};

export const getCountryWithLimit = limit => {
  return getAllCountry().filter((__, index) => index < limit);
};

export const formatDataCountryForBarChart = data => {
  let countries = [];
  if (isValidDataChart(data)) {
    const dataAfterFormatToArray = _.isArray(data)
      ? formaToValidNumberArray(data)
      : convertStringToArrayByComas(data);

    countries = getCountryWithLimit(dataAfterFormatToArray.length).map(
      (country, index) => country.set("value", dataAfterFormatToArray[index])
    );

    return countries.map(country => {
      return {
        id: country.getCode(),
        name: country.getName(),
        value: country.getValue()
      };
    });
  }

  return [];
};

export const formatDataCountryForLineChart = () => {
  return null;
};
