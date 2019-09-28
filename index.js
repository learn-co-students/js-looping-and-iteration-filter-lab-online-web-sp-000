import { truncateSync } from "fs";


//takes an array of divers and a string
function findMatching(drivers, strArg1) {
    //return mathing list or drivers
     return drivers.filter(function(driver){
         //list should be case insensitive
         return driver.toLowerCase() === strArg1.toLowerCase();
    });
}
//takes an array of drivers and a string 
function fuzzyMatch(drivers, strArg2) {
    let letters = [];
    //returns all drivers 
    return drivers.filter(function(driver){
        return driver.indexOf(strArg2) === 0;
        
        // if(driver === strArg2){
        //     return true;
        // } else {
        //     return false;
        // }

    });
}

function matchName(drivers, strArg3) {
    return drivers.filter(function(driver){
        return driver.name === strArg3;        
    });
}
