// Code your solution in this file
function findMatching(driversArray, string)
{
  return(driversArray.filter(function (driverName)
  {
    return(driverName.toLowerCase() === string.toLowerCase());
  }
  ));
}

function fuzzyMatch(driversArray, subString)
{
  let lengthOfName = subString.length;
  return(driversArray.filter(function (driverName)
  {
    return(driverName.slice(0, lengthOfName) === subString);
  }
  ));
}

function matchName(driversArray, string)
{
  return(driversArray.filter(function (driver)
  {
    return(driver.name.toLowerCase() === string.toLowerCase());
  }
  ));
}
