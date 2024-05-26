/*
//Linking JavaScript file
let js = 'amazing';
if(js === 'amazing') alert('JavaScript is Fun!');
console.log(40 + 8 + 23 - 10);

//------------

//Values and Variables
// A variable is a box where we can store values, later in the code we can reference the variable over and over again.

//Always use camel case convention for variable names
let firstPersonName = 'James';
console.log(firstPersonName);

// don't use below naming convention for variable names
// let new = 'NEW';
// let 3years = 3;
// let James = 'James';
// let james&Murphy = 'JM';

//allowed naming conventions
let job1 = 'Programmer';
let job2 = 'Teacher';
let PI = 3.14;

//------------

// Data Types
// Number : Floating point numbers - used for decimals and integers, ex: let age = 23;
// String : Sequence of characters - used for text, ex: let firstName = 'John';
// Boolean : Logical type that can only be true or false, ex: let isLightOn = true;
// Undefined : Value taken by a variable that is not yet defined, ex: let number;
// Null : Also means empty, ex: let value = null;
// Symbol (ES2015) : value that is unique and cannot be changed
// BigInt (ES2020) : Larger integers than the number type can hold

// JavaScript has dynamic typing: We do not have to manually 

let javaScript = 2024;
console.log(javaScript);
console.log(typeof javaScript);
//output: number

javaScript = 'JavaScript is Fun!';
console.log(javaScript);
console.log(typeof javaScript);
//output: string

javaScript = true;
console.log(javaScript);
console.log(typeof javaScript);
//output: boolean

let value;
console.log(value);
//output: undefined
console.log(typeof value);
//output: undefined
value = 20;
console.log(typeof value);

let job = null;
console.log(job);
//output: null
console.log(typeof job);
//This is a bug in javascript but was never fixed due to legacy reasons
//output: object

//------------

//let, const and var

//let
//let is block scoped
//let is used for the variables which requires reassigning after its declaration
//This is also known as **mutating** (reassigning) the variable
//let is also used for declaring empty (undefined) variable

let age = 22;
//age variable is mutated to 23
age = 23;
console.log(age);

//const
//const is used for the variables which shouldn't be reassigned after its declaration
//const variables are **immutable** and cannot be reassigned

const BIRTH_YEAR = 2001;
console.log(BIRTH_YEAR);

const NAME = "Murphy";
//This will throw "Assignment to constant variable" error
//NAME = "James Murphy";
console.log(NAME);

//var
//var is function scoped
//will be updated in the future
var job = 'Programmer';
job = 'Teacher';
console.log(job);

//------------

// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Beckmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

//------------

//------------

// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

//------------

// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);

//------------

//Taking Decisions: if/else statements
const age = 19;
const isOldEnough = age >= 18;
if(isOldEnough){
    console.log('can start driving license 🚘');
} else {
    const yearLeft = 18 - age;
    console.log(`You are too young, Wait another ${yearLeft} years 😀`);
}

const birthYear = 2011;
let century;
if(birthYear <= 2000){
    century = 20;
} else{
    century = 21;
}
console.log(century);
*/
//------------

// Type Conversion and Coercion

// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);