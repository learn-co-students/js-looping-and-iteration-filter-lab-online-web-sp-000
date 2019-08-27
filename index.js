// Code your solution in this file

function findMatching(drivers, name){
    return drivers.filter(function (d){
        return d.toLowerCase() == name.toLowerCase();
    });
}

function fuzzyMatch(drivers, letters) {
    let inputLength = letters.length;
    return drivers.filter(function (name){
        return name.slice(0, inputLength) === letters;
    });
}

function matchName(drivers, name) {
    return drivers.filter(function (d){
        return d.name.toLowerCase() === name.toLowerCase();
    });
}
