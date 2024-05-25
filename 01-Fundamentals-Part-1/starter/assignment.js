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

let averagePopulationOfCountry = 33;
if(population > averagePopulationOfCountry) console.log('my country has more population than average population of a country');
else console.log('Average population of a country is more thn the population of my country');

const description = country + ' is in ' + continent + ', and it has ' + population + ' million people speak ' + language;
console.log(description)