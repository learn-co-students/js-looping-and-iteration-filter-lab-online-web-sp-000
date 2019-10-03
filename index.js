// Code your solution in this file

function findMatching(drivers, name){
  const drivers_list = [];
    for(const driver of drivers){
      if (driver.toLowerCase() === name.toLowerCase()){
        drivers_list.push(driver);
      }
    }
  return drivers_list;
}

function fuzzyMatch(drivers, chars){
  const drivers_list = [];
  for(const driver of drivers){
      if (driver.startsWith(chars)){
        drivers_list.push(driver);
      }
    }
  return drivers_list;

}

function matchName(drivers, name){
  const drivers_list = [];

  for (const driver of drivers) {
    if(driver.name === name){
      drivers_list.push(driver);
    } 
  }
  return drivers_list;
}
