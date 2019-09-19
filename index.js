// Code your solution in this file

function findMatching(array, string) {
  return array.filter(function(driver) {
      return driver.toUpperCase() === string.toUpperCase();
  })
}

function fuzzyMatch(array, string) {
  return array.filter(function(driver) {
    // return driver.slice(0, 2) === string.slice();
    return driver.slice(0, string.length) === string;
  })
}

function matchName(array, string) {
  return array.filter(function(driver) {
    return driver.name === string;
  })
}