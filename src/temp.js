function celsiusToFahrenheit(centi) {
    let fahren = Math.round((centi * 9 / 5) + 32);
    console.log(centi + "°C is ", fahren + "°F");
}

function fahrenheitToCelsius(fahren) {
    let centi = Math.round((fahren - 32) * 5 / 9);
    console.log(fahren + "°F is ", centi + "°C");
}

celsiusToFahrenheit(20);
fahrenheitToCelsius(70);