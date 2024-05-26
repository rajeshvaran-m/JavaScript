# JavaScript

<h4> JavaScript is a High-Level, Object-Oriented, multi-paradigm programming language </h4>

> **High-Level:** We don't have to worry about complex stuff like memory management

> **Object-Oriented:** Based on objects for storing most kind of data

> **Multi-paradigm:** We can use different styles of programming

### Summary

- [Values and Variables](#Values-and-Variables)
- [Data Types](#Data-Types)
- [let const and var](#let-const-and-var)
- [Values and Variables](#Values-and-Variables)
- [Data Types](#Data-Types)
- [let, const and var](#let,-const-and-var)
- [Operators](#Operators)
- [Operator Precedence](#Operator-Precedence)
- [String and Template Literals](#String-and-Template-Literals)

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

## let const and var

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

## Operator Precedence

Operator precedence determines the order in which operators are evaluated in expressions. In JavaScript, operators with higher precedence are evaluated before operators with lower precedence. If operators have the same precedence, they are evaluated based on their associativity.

### Table of Operator Precedence

The following table lists operators in descending order of precedence (from highest to lowest):

| Precedence | Operator     | Description                     | Associativity | Example                         |
| ---------- | ------------ | ------------------------------- | ------------- | ------------------------------- |
| 1          | `()`         | Grouping                        | –             | `(1+2)`                         |
| 2          | `.`          | Member                          | Left to right | `obj.function`                  |
| 2.1        | `[]`         | Member                          | Left to right | `brand["carName"]`              |
| 2.2        | `new`        | Create                          | –             | `new Date("July 27, 2023")`     |
| 2.3        | `()`         | Function Call                   | Left to right | `myFun()`                       |
| 3          | `++`         | Postfix increment               | N/A           | `i++`                           |
| 3.1        | `--`         | Postfix decrement               | N/A           | `i--`                           |
| 4          | `++`         | Prefix increment                | Right to left | `++i`                           |
| 4.1        | `--`         | Prefix decrement                | N/A           | `--i`                           |
| 4.2        | `!`          | Logical NOT                     | Right to left | `!(x===y)`                      |
| 4.3        | `typeof`     | Type                            | Right to left | `typeof a`                      |
| 5          | `**`         | Exponentiation                  | Right to left | `4**2`                          |
| 6          | `*`          | Multiplication                  | Left to right | `2*3`                           |
| 6.1        | `/`          | Division                        | Left to right | `18/9`                          |
| 6.2        | `%`          | Remainder                       | Left to right | `4%2`                           |
| 7          | `+`          | Addition                        | Left to right | `2+4`                           |
| 7.1        | `-`          | Subtraction                     | Left to right | `4-2`                           |
| 8          | `<<`         | Left shift                      | Left to right | `y<<2`                          |
| 8.1        | `>>`         | Right shift                     | Left to right | `y>>2`                          |
| 8.2        | `>>>`        | Unsigned right shift            | Left to right | `y>>>2`                         |
| 9          | `<`          | Less than                       | Left to right | `3<4`                           |
| 9.1        | `<=`         | Less than or equal to           | Left to right | `3<=4`                          |
| 9.2        | `>`          | Greater than                    | Left to right | `4>3`                           |
| 9.3        | `>=`         | Greater than or equal to        | Left to right | `4>=3`                          |
| 9.4        | `in`         | Property in object              | Left to right | `"PI" in MATH`                  |
| 9.5        | `instanceof` | Instance of                     | Left to right | `A instanceof B`                |
| 10         | `==`         | Equality                        | Left to right | `x==y`                          |
| 10.1       | `!=`         | Inequality                      | Left to right | `x!=y`                          |
| 10.2       | `===`        | Strict equality                 | Left to right | `x===y`                         |
| 10.3       | `!==`        | Strict inequality               | Left to right | `x!==y`                         |
| 11         | `&`          | Bitwise AND                     | Left to right | `x&y`                           |
| 12         | `^`          | Bitwise XOR                     | Left to right | `x^y`                           |
| 13         | `Bitwise OR` | Bitwise OR                      | Left to right | `x Bitwise OR y`                |
| 14         | `&&`         | Logical AND                     | Left to right | `x&&y`                          |
| 15         | `Logical OR` | Logical OR                      | Left to right | `x Logical OR y`                |
| 16         | `? :`        | Conditional                     | Right to left | `(x>y) ? x : y`                 |
| 17         | `=`          | Assignment                      | Right to left | `x=5`                           |
| 17.1       | `+=`         | Addition assignment             | Right to left | `x+=5 // x=x+5`                 |
| 17.2       | `-=`         | Subtraction assignment          | Right to left | `x-=5 // x=x-5`                 |
| 17.3       | `*=`         | Multiplication assignment       | Right to left | `x*=5 // x=x*5`                 |
| 17.4       | `/=`         | Division assignment             | Right to left | `x/=5 // x=x/5`                 |
| 17.5       | `%=`         | Modulo assignment               | Right to left | `x%=5 // x=x%5`                 |
| 17.6       | `<<=`        | Left shift assignment           | Right to left | `x<<=5 // x=x<<5`               |
| 17.7       | `>>=`        | Right shift assignment          | Right to left | `x>>=5 // x=x>>5`               |
| 17.8       | `>>>=`       | Unsigned right shift assignment | Right to left | `x>>>=5 // x=x>>>5`             |
| 17.9       | `&=`         | Bitwise AND assignment          | Right to left | `x&=5 // x=x&5`                 |
| 17.10      | `^=`         | Bitwise XOR assignment          | Right to left | `x^=5 // x=x^5`                 |
| 17.11      | `Bitwise=`   | Bitwise OR assignment           | Right to left | `x Bitwise= 5 // x=x Bitwise 5` |
| 18         | `yield`      | Pause function                  | Right to left | `yield x`                       |
| 19         | `,`          | Comma                           | Left to right | `x, y`                          |

## String and Template Literals

### String

Strings are used for storing and manipulating text. A string can be any text inside quotes. You can use single or double quotes:

```javascript
let text = "Hello, World!";
```

### String Properties and Methods

Strings in JavaScript are objects and come with various properties and methods:

- **length**: Returns the length of the string.
- **toUpperCase()**: Converts the string to uppercase.
- **toLowerCase()**: Converts the string to lowercase.
- **charAt(index)**: Returns the character at the specified index.
- **substring(start, end)**: Extracts characters from a string, between two specified indices.
- **split(separator)**: Splits a string into an array of substrings based on a separator.

```javascript
let text = "Hello, World!";
console.log(text.length); // 13
console.log(text.toUpperCase()); // "HELLO, WORLD!"
console.log(text.toLowerCase()); // "hello, world!"
console.log(text.charAt(1)); // "e"
console.log(text.substring(0, 5)); // "Hello"
console.log(text.split(", ")); // ["Hello", "World!"]
```

### Template Literals

Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them. Template literals are enclosed by backticks (\` \`).

> **Syntax:** Template literals use backticks (\` \`) rather than the single or double quotes used for strings. They can contain placeholders, which are represented by `${expression}`.

```javascript
let name = "Alice";
let greeting = `Hello, ${name}!`;
console.log(greeting); // "Hello, Alice!"
```

### Multi-line Strings

Template literals make it simple to create multi-line strings:

```javascript
let multiLine = `This is a string
that spans across
multiple lines.`;
console.log(multiLine);
/*output
This is a string
that spans across
multiple lines.
*/
```

### Expression Interpolation

You can embed any expression within a template literal, including mathematical operations, function calls, and object properties:

```javascript
let a = 5;
let b = 10;
let result = `The sum of ${a} and ${b} is ${a + b}.`;
console.log(result); // "The sum of 5 and 10 is 15."
```
