function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
}

var fahrenheitValue = 70;
var celsiusValue = fahrenheitToCelsius(fahrenheitValue);
var roundedCelsiusValue = Math.round(celsiusValue)
// console.log(fahrenheitValue + " \u00B0F is " + roundedCelsiusValue + " \u00B0C");
console.log(fahrenheitToCelsius(fahrenheitValue))

var celsiusValue = 21;
var fahrenheitValue = celsiusToFahrenheit(celsiusValue);
var roundedFahrenheitValue = Math.round(fahrenheitValue);
console.log(celsiusValue + " \u00B0C is " + roundedFahrenheitValue + " \u00B0F")