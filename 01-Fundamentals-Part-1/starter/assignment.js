//Values and Variables
const country = 'India';
const continent = 'Asia';
let population = 1441

//Data Types
const isIsland = false;
let language = 'Tamil';

console.log({
    'Country': country,
    'Continent':continent,
    'Population': population + ' Millions',
    'isIsland': isIsland,
    'language': language
})

//Basic Operators
console.log(population/2);

population++;

let finlandPopulation = 6;
if(population > finlandPopulation) console.log('my country has more population than finland');
else console.log('finland has more population than my country');

//String and Template Literals
const description = `${country} is in ${continent}, and it has ${population} million people speak ${language}`
console.log(description);

//if-else conditions
let averagePopulationOfCountry = 33;
if(population > averagePopulationOfCountry){
    console.log(`${country}'s population is above average`);
} 
else{
    console.log(`${country}'s population is ${averagePopulationOfCountry - population} million below average`);
}

//Type Conversion and Coercion
console.log('9' - '5'); // -> 4
console.log('19' - '13' + '17'); // -> "617"
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143

//Truthy and Falsy values
if (0 || "" || undefined || null || NaN) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // Output: Falsy
}