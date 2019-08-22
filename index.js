// Code your solution in this file

function findMatching(list, string){
 return list.filter(function (driverNames) {
    return driverNames.toLowerCase() === string.toLowerCase();
  });
}

function fuzzyMatch (list, partialName) {
  let lengthOfName = partialName.length;
  return list.filter(function (driverName) {
    return driverName.slice(0, lengthOfName) === partialName;
  });
}

function matchName (list, string){
  return list.filter(function (driverNames) {
    return driverNames.name.toLowerCase() === string.toLowerCase();
});
}