// Code your solution in this file
function findMatching(array, target) {
  return array.filter(name => name.toLowerCase() === target.toLowerCase());
}

function fuzzyMatch(array, target) {
  return array.filter(name => name.slice(0,2) === target);
}

function matchName(array, target) {
  return array.filter(obj => obj.name === target)
}
