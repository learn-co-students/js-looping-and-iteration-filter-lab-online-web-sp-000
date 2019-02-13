// Code your solution in this file
function findMatching(array, name) {
  return array.filter(function(element) {
    return element.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(array, substr) {
  return array.filter(function(element) {
    return element.toLowerCase().startsWith(substr.toLowerCase());
  });
}

function matchName(array, property) {
  return array.filter(function (element) {
    return element.name === property;
  })
}
