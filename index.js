// Code your solution in this file

function findMatching(array, name) {
  return array.filter(person => person.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(array,name) {
  return array.filter(person => name === person.slice(0,name.length))
}

function matchName(array, name) {
  return array.filter(person => person.name === name)
}
