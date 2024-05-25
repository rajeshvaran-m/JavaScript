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
*/
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
