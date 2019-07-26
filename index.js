function findMatching(array, match) {
    return array.filter(name => name.toLowerCase() === match.toLowerCase())
  }
  
  function fuzzyMatch(array, letter) {
    return array.filter(name =>  name.startsWith(letter))
  }
  
  function matchName(obj, match) {
    return obj.filter(val => val.name.toLowerCase() === match.toLowerCase())
  }