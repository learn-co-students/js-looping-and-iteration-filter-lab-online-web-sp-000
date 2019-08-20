function findMatching(drivers, name) {
  return drivers.filter(function (element) { return name.toLowerCase() === element.toLowerCase(); });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(function (el) { return el.startsWith(string); });
}

function matchName(drivers, string) {
  return drivers.filter(function (el) { return el.name === string; });
}
