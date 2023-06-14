const add = function(a, b) {
	const result = a + b;
  return result;
};

const subtract = function(a, b) {
	const result = a - b;
  return result;
};

const sum = function(array) {
  let result = 0;
	array.forEach((i) => {
    result = result + i;
  })
  return result;
};

const multiply = function(array) {
  let result = 1;
  array.forEach((i) => {
    result = result * i;
  });
  return result;
};

const power = function(x, n) {
	const result = Math.pow(x, n);
  return result;
};

const factorial = function(x) {
	if (x === 0) return 1;

  let result = 1;
  for (let i = 1; i <= x; i ++) {
    result = result * i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
