// Code your solution in this file

function findMatching(list, name) {
  return list.filter(function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, nameish) {
  let lengthOfName = nameish.length;
  return list.filter(function (driver) {
    return driver.slice(0, lengthOfName) === nameish;
  });
}

function matchName(list, name) {
  return list.filter(function (driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}