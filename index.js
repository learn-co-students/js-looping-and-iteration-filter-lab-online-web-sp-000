// Code your solution in this file
function findMatching(drivers, name){
   return drivers.filter(n => n.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, letters){
    return drivers.filter(function(n){
        return letters.toLowerCase() === n.slice(0, letters.length).toLowerCase();
    })
}

function matchName(drivers, string){
    return drivers.filter(o => o.name === string)

}