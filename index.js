// Code your solution in this file
function findMatching(arr, str) {
  matches = [];
  lowerStr = str.toLowerCase();
  for (const i of arr) {
    lowerDriver = i.toLowerCase();
    if (lowerDriver === lowerStr){
      matches.push(i);
    }
  }
  return matches;
}

function fuzzyMatch(arr, str) {
  return arr.filter( function (i) { return i.slice(0, str.length) === str});
}

function matchName(obj, str) {
  return obj.filter( function (i) { return i.name.toLowerCase() === str.toLowerCase()});
}