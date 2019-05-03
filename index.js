// Code your solution in this file
function findMatching(drivers, str) {
    return drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
}

function fuzzyMatch(drivers, str) {
    return drivers.filter(driver => driver.slice(0, 2).toLowerCase() === str.toLowerCase());
}

function matchName(drivers, str) {
    return drivers.filter(driver => driver.name === str);
}