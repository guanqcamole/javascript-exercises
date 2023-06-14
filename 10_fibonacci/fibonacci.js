const fibonacci = function(number) {
    let num = parseInt(number);
    if (num <= 0) return "OOPS";

    const result = calculateFib(num);
    return result;
};

const calculateFib = (number) => {
    if (number === 1) return 1;
    if (number === 2) return 1;

    return calculateFib(number - 2) + calculateFib(number - 1);
}


// Do not edit below this line
module.exports = fibonacci;
