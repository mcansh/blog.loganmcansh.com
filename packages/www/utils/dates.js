// @flow
const tinydate = require('tinydate');

const formatDate = (date: number): string => {
  const inputDate = new Date(date);
  const stamp = tinydate('{YYYY}-{MM}-{DD}');
  return stamp(inputDate);
};

module.exports = formatDate;
