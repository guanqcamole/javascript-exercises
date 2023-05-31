const removeFromArray = function(array1, ...array2) {
        const result = array1.filter((element) => {
            return !array2.includes(element);
        });
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
