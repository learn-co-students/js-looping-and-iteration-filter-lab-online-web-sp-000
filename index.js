// Code your solution in this file
function findMatching(list, name) {
  return list.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}



function fuzzyMatch(arr, criteria){
  return arr.filter(function(name) {
    return name.slice(0,1) === criteria.slice(0,1);
  });
}


function matchName(list, name) {
  return list.filter(function(driver) {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
