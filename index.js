// Code your solution in this file

function findMatching(collection, string) {
  return collection.filter(function(driver_name) {return driver_name === string || driver_name.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(collection, string) {
  return collection.filter(function(name) {return name.slice(0, 2) === string})
}

function matchName(collection, string) {
  return collection.filter(function(object) {return object.name === string})
}
