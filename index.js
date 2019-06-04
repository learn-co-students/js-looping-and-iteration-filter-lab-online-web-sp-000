// Code your solution in this file
function findMatching(drivers, string) {
  return drivers.filter(function (f) { return f.toLowerCase() == string.toLowerCase(); });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (f) { return f.startsWith(string); });
}

function matchName(drivers, string) {
  return drivers.filter(function (f) { return f.name.toLowerCase() == string.toLowerCase(); });
}
