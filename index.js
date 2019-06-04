// Code your solution in this file
function findMatching(drivers, name) {
  const thisArray = drivers.filter(function (driv) { return driv.toUpperCase() === name.toUpperCase(); });
  return thisArray
}

function fuzzyMatch(drivers, letters) {
  letters = letters.toUpperCase();
  return drivers.filter(function (driv) { return driv.toUpperCase().startsWith(letters);});
}

function matchName(drivers, name) {
  return drivers.filter(function (driv) { return driv.name === name; });
}
