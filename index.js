// Code your solution in this file
function findMatching(driversArr, str) {
  return driversArr.filter(driver => driver.toLowerCase() === str.toLowerCase());
};

function fuzzyMatch(driversArr, str) {
  return driversArr.filter(driver => driver.slice(0,str.length).toLowerCase() === str.toLowerCase());
};

function matchName(driversArr, str) {
  return driversArr.filter(driver => driver.name === str);
};
