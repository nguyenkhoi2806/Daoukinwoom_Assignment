export const formatNumberToMoney = number => {
  return new Intl.NumberFormat("de-DE").format(number);
};
