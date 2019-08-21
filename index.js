// Code your solution in this file
function findMatching(drivers, string){
    return drivers.filter(function(driverName){return driverName.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(drivers, string){
    return drivers.filter(function(name){return name.toLowerCase().startsWith(string.toLowerCase())})
}

function matchName(drivers, string){
    return drivers.filter(function(driver){return driver.name.toLowerCase() === string.toLowerCase()})

}