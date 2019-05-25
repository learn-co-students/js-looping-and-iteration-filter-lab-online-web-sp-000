function findMatching(drivers, name) {
  return drivers.filter( function(element){ return element.toLowerCase() === name.toLowerCase(); });
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(function(element) {return element.startsWith(name); });
}

function matchName(drivers, name) {
    return drivers.filter(function(element) { return element.name === name; });
}
