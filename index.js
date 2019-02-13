// Code your solution in this file
function findMatching(array, string) {
  return array.filter(function (driver){
    return driver.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch (array, part) {
  let lengthOfName = part.length;
  return array.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === part;
  });
}

function matchName (array, string) {
  return array.filter(function (driver) {
    return driver.name.toLowerCase() === string.toLowerCase();
  });
}