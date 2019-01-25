// Code your solution in this file

function findMatching(drivers, string) { 
  return drivers.filter(function(name) {
    return string.toUpperCase() === name.toUpperCase(); 
  });
}

function fuzzyMatch(drivers, string){ 
 return drivers.filter(function(letters){ 
   return letters.slice(0, string.length) === string
 }); 
}

function matchName(drivers, string){ 
 return drivers.filter(function(el){ 
   return el.name == string; 
 }) 
}