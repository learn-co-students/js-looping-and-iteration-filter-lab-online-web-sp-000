// Code your solution in this file
function findMatching(driverArray, name){
  return driverArray.filter(function (driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  });

}

function fuzzyMatch(array, stringToQueryArray){
  let lengthOfName = stringToQueryArray.length;
  return array.filter(function (arrayElement){
    return arrayElement.slice(0, lengthOfName) === stringToQueryArray;
  });
}

function matchName(array, name){
  return array.filter(function (arrayElement){
    return arrayElement.name.toLowerCase() === name.toLowerCase();
  });
}
