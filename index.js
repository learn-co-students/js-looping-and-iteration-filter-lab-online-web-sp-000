// Code your solution in this file
function findMatching(drivers, searchString) {
  searchString = searchString.toLowerCase();
  return drivers.filter(function (driver) { return searchString === driver.toLowerCase();});
}

function fuzzyMatch(drivers, searchString) {
  searchString = searchString.toLowerCase();
  return drivers.filter(function (driver) { return driver.toLowerCase().startsWith(searchString);});
}

function matchName(drivers, searchString) {
  return drivers.filter(function (driver) { return driver.name === searchString; });
}
