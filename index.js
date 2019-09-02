// Code your solution in this file
function findMatching(drivers, string) {
  let result = drivers.filter(driver =>
      driver.toLowerCase() === string.toLowerCase());
 return result
}

function fuzzyMatch(drivers, string) {
  let lengthOfDrivers = string.length;
  return drivers.filter(driver =>
      driver.slice(0, lengthOfDrivers) === string);
      return result
}

function matchName(drivers, string) {
  let result = drivers.filter(driver =>
    driver.name.toLowerCase() === string.toLowerCase());
  return result
}
