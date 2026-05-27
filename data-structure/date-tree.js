'use strict';

const [ currentYear, yearInterval ] = [ 2020, 2 ];
const buildMonthRoot = (year) => {
  return Array.from(new Array(12).keys()).map(item => {
    const monthStr = item + 1;
    return {
      title: `${monthStr}月`,
      key: `${year}-${monthStr}`
    }
  })
}
const yearRoot = Array.from(new Array(yearInterval).keys()).map(item => {
  const yearStr = currentYear - item;
  return {
    title: yearStr,
    key: yearStr,
    children: buildMonthRoot(yearStr)
  }
});