const convertToCelsius = function(fdegree) {
  const cdegree = (fdegree - 32) * 5 / 9;
  return roundToOneDecimal(cdegree);
};

const convertToFahrenheit = function(cdegree) {
  const fdegree = cdegree * 9 / 5 + 32;
  return roundToOneDecimal(fdegree);
};

const roundToOneDecimal = (degree) => {
  const round = Math.round(degree * 10) / 10;
  return round;
}; 

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
