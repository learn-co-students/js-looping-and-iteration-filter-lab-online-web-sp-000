// Code your solution in this file
function findMatching(drivers, driverStr) {
  matchedDrivers = [];

  for (const driver of drivers) {
    if (driver.toLowerCase() === driverStr.toLowerCase()) {
      matchedDrivers.push(driver);
    }
  }

  return matchedDrivers;
}

function fuzzyMatch(drivers, str) {
  matchedDrivers = [];
  const length = str.length;

  for (const driver of drivers) {
    if (driver.toLowerCase().slice(0, length) === str.toLowerCase()) {
      matchedDrivers.push(driver);
    }
  }

  return matchedDrivers;
}

function matchName(drivers, name) {
  matchedDrivers = [];

  for (const driver of drivers) {
    if (driver.name === name) {
      matchedDrivers.push(driver);
    }
  }

  return matchedDrivers;
}
