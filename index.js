// Code your solution in this file
function findMatching(array, name){
  
  const matchingNames = [];
  
  for (const userName of array){
    if (userName.toLowerCase() === name.toLowerCase()){
      matchingNames.push(userName)
    }
  }
  
  return matchingNames;
}

function fuzzyMatch(array, parameters){
  
  const matchingNames = [];
  
  for (const userName of array){
    if (userName.slice(0, 2).toLowerCase() === parameters.toLowerCase()){
      matchingNames.push(userName)
    }
  }
  
  return matchingNames;
}

function matchName(driverArray, name){
  
  const matchingDrivers = [];
  
  for (const driver of driverArray){
    if(driver.name.toLowerCase() === name.toLowerCase()){
      matchingDrivers.push(driver)
    }
  }
  
  return matchingDrivers;
}