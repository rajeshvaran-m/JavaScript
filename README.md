# JavaScript

<h4> JavaScript is a High-Level, Object-Oriented, multi-paradigm programming language </h4>

> **High-Level:** We don't have to worry about complex stuff like memory management

> **Object-Oriented:** Based on objects for storing most kind of data

> **Multi-paradigm:** We can use different styles of programming

## Values and Variables

- A variable is a box where we can store values, later in the code we can reference the variable over and over again.

- Always use camel case convention for variable
  ```js
  let firstPersonName = "James";
  ```
- Don't use the below naming convention for variable naming

  ```js
  //These naming convention will throw syntax error
  let new = 'NEW';
  let 3years = 3;
  let james&Murphy = 'JM';

  //This won't throw runtime error but its a bad practice
  let James = 'James';
  ```

- Allowed naming conventions

  ```js
  let myPreviousJob = "Programmer";
  let myCurrentJob = "Teacher";
  const PI = 3.14;
  ```

## Data Types

- **Number:** Floating point numbers - used for decimals and integers
  ```js
  let age = 23;
  ```
- **String:** Sequence of characters - used for text
  ```js
  let firstName = "John";
  ```
- **Boolean:** Logical type that can only be true or false
  ```js
  let isLightOn = true;
  ```
- **Undefined:** Value taken by a variable that is not yet defined
  ```js
  let number;
  console.log(number);
  //output: undefined
  ```
- **Null:** Also means empty
  ```js
  let value = null;
  console.log(value);
  //output: null
  ```
- **Symbol (ES2015):** value that is unique and cannot be changed
- **BigInt (ES2020):** Larger integers than the number type can hold

> **_JavaScript has dynamic typing_**: We do not have to manually define the data type of the value stored in variable. Instead, data types are determined **automatically**

```js
let javaScript = 2024;
console.log(typeof javaScript);
//output: number

javaScript = "JavaScript is Fun!";
console.log(typeof javaScript);
//output: string

javaScript = true;
console.log(typeof javaScript);
//output: boolean
```

```js
let value;
console.log(typeof value);
//output: undefined
value = 20;
console.log(typeof value);
//output: number
```

```js
let job = null;
console.log(typeof job);
//This is a bug in javascript but was never fixed due to legacy reasons
//output: object
```

## let, const and var

### let

- let is block scoped
- let is used for the variables which requires reassigning after its declaration
- This is also known as **mutating** (reassigning) the variable
- let is also used for declaring empty (undefined) variable

```js
let age = 22;
//age variable is mutated to 23
age = 23;
```

### const

- const is used for the variables which should not be reassigned after its declaration
- const variables are **immutable** and remains constant
- const variable should be named in upper cases

```js
const BIRTH_YEAR = 2001;
```

```js
const NAME = "Murphy";
//This will throw "Assignment to constant variable" error
NAME = "James Murphy";
```

### var

- var is function scoped

**For now we will be only using let or const variables**

** var details Will be updated in the future **

## Operators

### Arithmetic Operators

> Arithmetic operators are used to perform arithmetic operations on numbers.

- **Addition (+)**: Adds two numbers.
- **Subtraction (-)**: Subtracts two numbers
- **Multiplication (\*)**: Multiplies two numbers.
- **Division (/)**: Divides one number by another.
- **Modulus (%)**: Returns the division remainder.
- **Increment (++)**: Increases a number by one.
- **Decrement (--)**: Decreases a number by one.

### Assignment Operators

> Assignment operators assign values to variables.

- **Assignment (=)**: Assigns a value to a variable.
- **Addition Assignment (+=)**: Adds and assigns a value.
- **Subtraction Assignment (-=)**: Subtracts and assigns a value.
- **Multiplication Assignment (\*=)**: Multiplies and assigns a value.
- **Division Assignment (/=)**: Divides and assigns a value.
- **Modulus Assignment (%=)**: Calculates the modulus and assigns a value.

### Comparison Operators

> Comparison operators compare two values and return a boolean value.

- **Equal to (==)**: Checks if two values are equal.
- **Strict Equal to (===)**: if two values are equal and of the same type.
- **Not Equal to (!=)**:Checks if two values are not equal.
- **Strict Not Equal to (!==)**: Checks if two values are not equal or not of the same type.
- **Greater than (>)**: Checks if the left value is greater than the right value.
- **Less than (<)**: Checks if the left value is less than the right value.
- **Greater than or Equal to (>=)**: Checks if the left value is greater than or equal to the right value.
- **Less than or Equal to (<=)**: Checks if the left value is less than or equal to the right value.
- **Logical Operators**: Logical operators are used to determine the logic between variables or values.
- **Logical AND (&&)**: Returns true if both statements are true.
- **Logical OR (||)**: Returns true if one of the statements is true.
- **Logical NOT (!)**: Reverses the result, returns false if the result is true.
