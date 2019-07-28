// Code your solution in this file
function findMatching(list, name) {
  return list.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, initial) {
  return list.filter(function(driverName) {
    return driverName.slice(0, initial.length) === initial;
  });
}

function matchName(list, name) {
  return list.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase;
  });
}
