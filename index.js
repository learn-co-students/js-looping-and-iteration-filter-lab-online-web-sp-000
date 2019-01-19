function findMatching (collection, match) {
  return collection.filter(function (name) {return name.toLowerCase() === match.toLowerCase();});
}

function fuzzyMatch (collection, letters) {
  return collection.filter(function (name) {return name.startsWith(letters);})
}

function matchName (collection, match) {
  return collection.filter(function (driver) {return driver.name === match;});
}