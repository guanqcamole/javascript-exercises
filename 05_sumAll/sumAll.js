const sumAll = function(num1, num2) {
    //return "ERROR" if either number is a non-number
    if ((typeof num1 != 'number' && typeof num2 != 'number')) return "ERROR";

    //return "ERROR" if either number is negative
    if (num1 < 0 || num2 < 0) return "ERROR";

    //change so that first number is smaller than second number
    if (num1 > num2) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    //algorithm to calculate sum
    let result = 0;
    while (num1 <= num2) {
        result = result + num1;
        num1++;
    }
    return result;

};

// Do not edit below this line
module.exports = sumAll;
