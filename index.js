// Code your solution in this file

function findMatching(drivers, name) {
  let list = [];
  list = drivers.filter(function (driver) { return driver.toLowerCase() === name.toLowerCase()});
  return list;
}

function fuzzyMatch(drivers, letters) {
  let list = [];
  list = drivers.filter(function (driver) { return driver.slice(0, letters.length) === letters});
  return list;
}

function matchName(drivers, name) {
  let list = [];
  list = drivers.filter(function (driver) { return driver.name === name });
  return list;
}
