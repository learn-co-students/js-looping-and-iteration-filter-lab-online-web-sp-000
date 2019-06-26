// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (driver) { return string.toLowerCase() === driver.toLowerCase(); })
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (driver) { return string.slice(0, 2) === driver.slice(0, 2)})
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) { return driver.name === string })
}
