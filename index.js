function findMatching (drivers, name) {
  return drivers.filter(function(driverName) {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}
// The part to note - when you run the function within filter
// specify function(driverName) so that you can manipulate each element

function fuzzyMatch (drivers, portion) {
  return drivers.filter(function(driverN) {
    return driverN.startsWith(portion);
  });
}
// Looked up startsWith function
function matchName (drivers, string) {
  return drivers.filter(function(driverN) {
    return driverN['name'] === string
  });
}
// Note here how we can access it using bracket notation
// Since it's an object

// Conclusions:
// The function needs to be a true or false statement
// Whether or not it includes ===
// Or an array/string  
