// 15-Jul-2026, TDL Summer School 2026

// Double slash for a single line comment!
// -> Highlighting a line + CTRL + / will comment the line out

/*
Multiline comments in JS
are made using slash and multiply!
*/

// 1. Print "Hello world!" to console:
console.log("Hello World!");
console.log('Hello World!');
console.log(`Hello World <${1 + 2}`);

// 2. Variables:

// -----------------------------------------------------------------------------
// Using 'const' (short for constant) keyword means 
// that the value 
// should not / can not be changed (re-assigned):
const text = 'Hello World!';
console.log(text);
console.log(typeof text); // string -> JS primiti data type 
// text = 'Meow'; --> Will give the "TypeError: Assignment to constant variable."

const numb1 = 6;
const numb2 = 5;
console.log(`${numb1 + numb2}$`);
console.log(typeof numb1); // number -> JS primitive data type
console.log(typeof numb2); //number -> JS primitive data type

// -----------------------------------------------------------------------------
// Using 'let' keyword allows you to change
// (re-assign) the value later
let age = 23;
console.log(age);
age = 32;
console.log(age);

// let age = 40; -> Syntax error: Indentifier 'age' has already been declared. Cannot re-declare.

// -----------------------------------------------------------------------------
// Using 'var' keyword -> Not used anymore
// 'var' is the old way to create variables in JS
var pet = 'Simon';
var pet = 'Danny'; // Allows to re-declare, bad practice.
pet = 'Donald'
console.log(pet);
console.log('pet' in globalThis); // Not in global scope -> false

// -----------------------------------------------------------------------------
// Global variable --> Bad practice:
globNumb = 10; // The global value can be modified from anywhere in your application (including other file).  --> But I am not sure.
console.log(globNumb);
console.log(global.globNumb);
console.log('globNumb' in globalThis); // true

// 3. Data Types:
// 3.1 Primitive types:
const exampleString = 'Hello'; // string (text)

const exampleNum = 3; // number (integers, decimals, floats)
const exampleDecimal = 3.14;
console.log(exampleDecimal);

const exampleBool = true; // boolean (true or false), no representation as 1 or 0

const exampleNull = null; // null (empty or unknown value)
console.log(exampleNull);

let exampleUndefined; // undefined (variable is declared but no value is assigned)
// const exampleUndefinedConst -> SyntaxError: Missing initializer in const declaration;
console.log(exampleUndefined);

const id = Symbol("id") // symbol (used as unique identifier), can be used as object property keys
// Symbol("id") == Symbol("id"); // false

// BigInt:
let x = 999999999999999n;
let y = BigInt("999999999999999");
// JS Numbers are stored in a 64-bit floating point. Large numbers will be rounded.
// You cannot mix BigInt and Number directly!

// 3.2. Reference Type
// Object (collection of key-value pairs):
const exampleObject = { name: 'Nana', age: 19 };
console.log(exampleObject);

// Arrays (list of values):
const exampleArray = [1, 2, 3]; // the values of array are mutable, but you cannot reassign new array if the const keyword is used (can if let)
console.log(exampleArray);

// Functions (blocks of code you can run)


// 4. Data Type Conversion:
// 4.1 Convert number to a string:
const number = 46;
console.log(typeof number); //typeof is an operator
console.log(String(number));
console.log(typeof String(number));

// 4.2 Convert a string to a number:
const string = '33'; // if string = 'Nana' will be a NaN (not a number); no error!
const stringToNumber = Number(string)
console.log(stringToNumber);
console.log(typeof stringToNumber);

// 4.3 Boolean conversion:
// - null and undefined:
//   While checking values in condition (e.g., if statements), no need conversion, falsey values (converted automatically)
const empty = null;
const emptyToBull = Boolean(empty);
console.log(emptyToBull); // false
console.log(typeof emptyToBull); // boolean

let notDefined;
console.log(Boolean(notDefined)); // false

// - Falsye/Truthy values:
const firstNumber = 1;
const secondNumber = 0;

const firstNumberToBool = Boolean(firstNumber);
const secondNumberToBool = Boolean(secondNumber);

console.log(firstNumberToBool); // true
console.log(secondNumberToBool); // false

// - Difference between working with primitive and reference;
const number1 = 228;
const array1 = [1, 2, 3];

let number2 = number1;
const array2 = array1; // point to the object (aka copies the reference), changing the array2 will affect array1

console.log(number1);
console.log(number2);

console.log(array1);
console.log(array2);

number2 = 328;
array2.push(4);

console.log(number1);
console.log(number2);

console.log(array1);
console.log(array2);