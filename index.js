// findMatching()
// returns all drivers that match the passed in name
// returns matching drivers if case does not match but letters do
// returns an empty array if there is no match

function findMatching (list, name) {
    return list.filter(function (driverName) {
        return driverName.toLowerCase() === name.toLowerCase();
    });
}


// fuzzyMatch()
// returns a driver if beginning provided letters match
// does not return drivers if only middle or ending letters match
// does not return drivers if only middle or ending letters match

function fuzzyMatch (list, partialName) {
    let lengthOfName = partialName.length;

    return list.filter(function (driverName) {
        return driverName.slice(0, lengthOfName) === partialName;
    });
}


// matchName()
// accesses the data structure to check if name matches

function matchName (list, name) {
    return list.filter(function (driver) {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}
