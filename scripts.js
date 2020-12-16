// //kelvin value will be fixed to 293
// const kelvin = 293;

const kelvin = prompt('Enter the temperature in kelvin degress: ');

//converting Kelvin to Celcius
const celcius = kelvin - 273;

//fahrenheit value will be changed
let fahrenheit = celcius * (9 / 5) + 32;

//rounding decimal results
fahrenheit = Math.round(fahrenheit);

// console.log(`The temperature is ${fahrenheit} degrees fahrenheit`);
alert(
	`The temperature is ${celcius} degrees celcius and ${fahrenheit} degrees fahrenheit`,
);
