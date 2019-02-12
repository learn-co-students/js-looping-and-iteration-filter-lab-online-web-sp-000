function findMatching(drivers, name) {
  return drivers.filter(d => {
    return d.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => {
    for (let i = 0; i < Math.min(driver.length, string.length); i++) {
      if (driver[i] !== string[i]) {
        return false;
      }
    }
    return true;
  });
}

function matchName(drivers, name) {
  return drivers.filter((driver)=>{
    return driver.name === name
  })
}
