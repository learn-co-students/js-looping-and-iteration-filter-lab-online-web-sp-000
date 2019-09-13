// Code your solution in this file
// const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const findMatching = (drivers, name) => {
    return drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase();
    });
};

const fuzzyMatch = (drivers, partOfName) => {
    let lengthOfName = partOfName.length;
    return drivers.filter(driver => {
        return driver.slice(0, lengthOfName) === partOfName;
    } );
};

const matchName = (drivers, name) => {
    return drivers.filter(driver => {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
};