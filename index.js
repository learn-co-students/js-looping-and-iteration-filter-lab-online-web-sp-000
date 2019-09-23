function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
  const re = new RegExp(`^${name}`, 'i')
  return drivers.filter(driver => re.test(driver))
}

function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver["name"].toLowerCase() === name.toLowerCase();
  });
}
