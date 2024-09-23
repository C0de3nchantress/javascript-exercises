const findTheOldest = function(people) {
    let name = ""
    let largest = 0
    let personAnswer = null;
    let today = new Date();
    people.forEach(person => {
        let yearOfDeath = person.yearOfDeath || today.getFullYear();
        if ((yearOfDeath - person.yearOfBirth) > largest) {
            largest = yearOfDeath - person.yearOfBirth;
            name = person.name;
            personAnswer = person;
        }
    });

    return personAnswer;
};

const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people))

// Do not edit below this line
module.exports = findTheOldest;
