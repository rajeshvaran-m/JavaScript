# JavaScript

<h4> JavaScript is a High-Level, Object-Oriented, multi-paradigm programming language </h4>

> **High-Level:** We don't have to worry about complex stuff like memory management

> **Object-Oriented:** Based on objects for storing most kind of data

> **Multi-paradigm:** We can use different styles of programming

### Summary

- [Values and Variables](#Values-and-Variables)
- [Data Types](#Data-Types)
- [let const and var](#let-const-and-var)
- [Boolean Logic](#Boolean-Logic)
- [Operators](#Operators)
- [Operator Precedence](#Operator-Precedence)
- [String and Template Literals](#String-and-Template-Literals)
- [If-Else Statements](#If-Else-Statements)
- [Type Conversion and Coercion](#Type-Conversion-and-Coercion)
- [Truthy and Falsy Values](#Truthy-and-Falsy-Values)
- [Loose vs Strict Equality](#Loose-vs-Strict-Equality)
- [Logical Operators](#Logical-Operators)

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

## Boolean Logic

Boolean logic in JavaScript involves the use of boolean values (`true` and `false`) and logical operators to make decisions and control the flow of a program.

#### Boolean Values

In JavaScript, `true` and `false` are the two boolean values representing true and false, respectively.

```javascript
let isTrue = true;
let isFalse = false;
```

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

## If-Else Statements

Conditional statements control the flow of a program based on conditions. The `if` statement executes a block of code if a specified condition is true. The `else` statement executes a block of code if the same condition is false. The `else if` statement specifies a new condition if the first condition is false.

### if Statement

The `if` statement is used to specify a block of code to be executed if a condition is true.

```javascript
if (condition) {
  // code to be executed if condition is true
}
```

**Example:**

```js
let age = 18;

if (age >= 18) {
  console.log("You are an adult.");
}
// Output: You are an adult.
```

### if-else Statement

The `if-else` statement is used to specify a block of code to be executed if the condition is false.

```js
if (condition) {
  // code to be executed if condition is true
} else {
  // code to be executed if condition is false
}
```

**Example:**

```js
let age = 16;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
// Output: You are a minor.
```

### if-else if-else Statement

The `if-else if-else` statement is used to specify a new condition if the first condition is false.

```js
if (condition1) {
  // code to be executed if condition1 is true
} else if (condition2) {
  // code to be executed if condition1 is false and condition2 is true
} else {
  // code to be executed if condition1 and condition2 are both false
}
```

**Example:**

```js
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}
// Output: Grade: B
```

## Type Conversion and Coercion

JavaScript is a dynamically typed language, meaning variables can hold values of any data type. Type conversion and coercion are mechanisms to convert data from one type to another.

### Type Conversion

> Type conversion is the process of explicitly converting a value from one data type to another.

#### Methods for Type Conversion

- **String()**: Converts a value to a string.
- **Number()**: Converts a value to a number.
- **Boolean()**: Converts a value to a boolean.

  ```javascript
  let number = 10;
  let stringNumber = String(number); // "10"

  let stringYear = "2000";
  let numberYear = Number(stringYear); // 2000
  let booleanValue = Boolean(stringYear); // true
  ```

- **toString()** Method

  > The `toString()` method is used to convert a value to its string representation.

  ```javascript
  let num = 42;
  let str = num.toString(); // "42"
  ```

### Type Coercion

Type coercion in JavaScript refers to the automatic conversion of values from one data type to another during JavaScript operations.

- #### String Coercion

  > String coercion occurs when a non-string value is used in a string context, such as concatenation with a string.

  ```javascript
  let num = 42;
  let str = "40" + num; // "4042"
  ```

- #### Number Coercion

  > Number coercion occurs when a non-numeric value is used in a numeric context, such as arithmetic operations.

  ```javascript
  let str = "42";
  let num = str - 1; // 41
  ```

## Truthy and Falsy Values

> **Boolean coercion** occurs when a non-boolean value is used in a boolean context, such as in an `if` statement or logical operation.

```javascript
//Falsy Values
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
//output: False
```

**Example:**

```javascript
if (0 || "" || undefined || null || NaN) {
  // Falsy values
  console.log("Truthy");
} else {
  console.log("Falsy"); // Output: Falsy
}
```

## Loose vs Strict Equality

In JavaScript, `==` and `===` are both comparison operators used to compare values. However, they differ in how they perform the comparison.

- ### Loose Equality (==)

  The `==` operator, also known as the loose equality operator, compares the values on both sides after performing type coercion, if necessary. It converts the operands to the same type before making the comparison.

  **Example:**

  ```javascript
  console.log(5 == "5"); // true
  ```

  > In this example, the number 5 is loosely equal to the string "5". JavaScript coerces the string to a number and then compares the values, resulting in true.

- ### Strict Equality (===)

  The `===` operator, also known as the strict equality operator, compares the values on both sides without performing type coercion. It checks for both value equality and type equality.

  **Example:**

  ```javascript
  console.log(5 === "5"); // false
  ```

  > In this example, the number 5 is not strictly equal to the string "5" because they are of different types. JavaScript does not perform any type coercion, so the comparison results in false.

## Logical Operators

Logical operators are used to perform logical operations on boolean values in JavaScript. JavaScript provides three logical operators: Logical AND (`&&`), Logical OR (`||`), and Logical NOT (`!`).

### 1. Logical AND (&&)

> The logical AND operator returns true if both operands are true, otherwise it returns false.

```javascript
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false
```

### 2. Logical OR (||)

> The logical OR operator returns true if at least one of the operands is true, otherwise it returns false.

```javascript
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
```

### 3. Logical NOT (!)

> The logical NOT operator negates the boolean value of its operand. If the operand is true, it returns false, and if the operand is false, it returns true.

```javascript
console.log(!true); // false
console.log(!false); // true
```
