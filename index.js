// Code your solution in this file
function findMatching(array, filter) {
  return array.filter(name => name.toLowerCase() === filter.toLowerCase())
}

function fuzzyMatch(array, filter) {
  return array.filter(name => name.toLowerCase().indexOf(filter.toLowerCase()) === 0)
}

function matchName(objects, filter) {
  return objects.filter(obj => obj.name === filter)
}
