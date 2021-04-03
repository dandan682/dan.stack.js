const temperatures = [50, 51, 52, 53, 54, 55];
temperatures.push(56);
const toCelsius = (temperature) => (5 / 9) * (temperature - 32)

for (let i = 0; i < temperatures.length; i++) {
    console.log(
        temperatures[i],
        " temperature to celsius is ",
        toCelsius(temperatures[i]));
}

const northTemperatures = [50, 51, 52];
const southTemperatures = [70, 71, 72];

let northSum = 0;
for (let i = 0;i < northTemperatures.length; i++) {
    northSum += northTemperatures[i];
}

let southSum = 0;
for (let i = 0; i < southTemperatures.length; i++) {
    southSum += southTemperatures[i];
}

const italyTemperatures = {
    northTemperatures: northSum / northTemperatures.length, 
    southTemperatures: southSum / southTemperatures.length,
}

console.log("The average temperature in north italy is",
            italyTemperatures.northTemperatures);

console.log("The average temperature in south italy is",
            italyTemperatures.southTemperatures);
