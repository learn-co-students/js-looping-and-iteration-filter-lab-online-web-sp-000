// Code your solution in this file
function findMatching (drivers, string) {
    let result = drivers.filter(driver => 
        driver.toLowerCase() === string.toLowerCase());
   return result
}

function fuzzyMatch (drivers, partialString){
    let lengthOfDrivers = partialString.length;
    return drivers.filter(driver => 
        driver.slice(0, lengthOfDrivers) === partialString);
        return result
}

function matchName(drivers, name){
    let result = drivers.filter(driver => 
    driver.name.toLowerCase() === name.toLowerCase());
       return result 
}