// Code your solution in this file
function findMatching(drivers, name)
{
    return drivers.filter(function (user) { return user.toLowerCase() === name.toLowerCase(); }) ;
}
 
function fuzzyMatch(drivers, name)
{
    return drivers.filter(function (user) { return user.startsWith(name) ; }) ;
}

function matchName(drivers, name)
{
    return drivers.filter(function (user) { return user.name === name; }) ;

}