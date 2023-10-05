const convertToCelsius = function(F) {
  let celsius = ((F-32)*5/9);
  return parseFloat(celsius.toFixed(1));
}

const convertToFahrenheit = function(C) {
  let fahrenheit = (C * 9/5) + 32;
  return parseFloat(fahrenheit.toFixed(1));
}
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
