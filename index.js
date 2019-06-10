// Code your solution in this file
function findMatching(obj, name) {
  return obj.filter(function (description) {
    return description.toLowerCase() === name.toLowerCase()
  })
};

function fuzzyMatch(obj, name) {
  return obj.filter(function (description) {
    return description[0].toLowerCase() === name[0].toLowerCase()
  })
}

function matchName(obj, name) {
  return obj.filter(function (data) {
    return data.name.toLowerCase() === name.toLowerCase()
  })
}
