// Code your solution in this file
function findMatching( list, name ) {
  return list.filter( function (drivers) {
    return drivers.toLowerCase() === name.toLowerCase()
  });
}

function fuzzyMatch(list, name) {
  let nameLength = name.length;
  return list.filter ( function (drivers) {
    return drivers.slice(0, nameLength) === name;
  });
}

function matchName(list, name) {
  return list.filter( function (drivers) {
    return drivers.name === name
  });
}
