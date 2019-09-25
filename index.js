// Code your solution in this file

const findMatching = (drivers, string) => drivers.filter(item => item.toUpperCase() === string.toUpperCase());

const fuzzyMatch = (drivers, string) => drivers.filter(item => item.toUpperCase().substring(0, string.length) === string.toUpperCase());

const matchName = (drivers, string) => drivers.filter(obj => obj.name.toUpperCase() === string.toUpperCase());
