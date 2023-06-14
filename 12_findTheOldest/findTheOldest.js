const findTheOldest = function(people) {
    const curYear = 2023
    let maxAge = 0;
    let oldest = '';
    for (person of people) {
        let yearOfDeath = person.yearOfDeath;
        console.log(yearOfDeath);
        if (typeof yearOfDeath === 'undefined') {
            yearOfDeath = curYear;
        }

        const age = yearOfDeath - person.yearOfBirth;

        if (age > maxAge) {
            maxAge = age;
            console.log(maxAge);
            oldest = person;
        }
    };

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
