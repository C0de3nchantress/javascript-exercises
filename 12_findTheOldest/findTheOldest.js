const findTheOldest = function(array) {
    currentYear = 2025
    return array.reduce((oldest, current) => {
        const currentAge = (current.yearOfDeath || currentYear) - current.yearOfBirth;
        const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
        return currentAge > oldestAge ? current : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
