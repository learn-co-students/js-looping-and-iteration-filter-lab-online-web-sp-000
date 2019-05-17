// Code your solution in this file

function findMatching(array, name) {
  return array.filter(function(key) {return key.toLowerCase() === name.toLowerCase();});
}

function fuzzyMatch(array, name) {
  return array.filter(function(key) {return key.startsWith(name);});
}

function matchName(array, name) {
  return array.filter(function(key) {return key.name.toLowerCase() === name.toLowerCase();});
}
