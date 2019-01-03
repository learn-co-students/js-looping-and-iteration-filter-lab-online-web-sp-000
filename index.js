// Code your solution in this file
function findMatching(driversArray, string) {
  return driversArray.filter(function (driverElement) {
    return driverElement.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch(driversArray, string) {
  return driversArray.filter (function (driverElement) {
    return driverElement.slice(0, string.length) === string
  })
}

function matchName(driversArray, string) {
  return driversArray.filter (function (driverElement) {
    return driverElement.name === string
    // return driverElement['name'] === string
  })
}