import DataCountry from "../country.json";
import Country from "../models/Country";

export const getAllCountry = () => {
  return Object.keys(DataCountry).map(index => new Country(DataCountry[index]));
};

export const getCountryWithLimit = limit => {
  return getAllCountry().filter((__, index) => index < limit);
};
