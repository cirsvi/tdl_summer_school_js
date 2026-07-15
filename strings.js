// 1. Defining strings in JS:
// - Double quotes:
const string1 = "Hello with double quotes";
console.log(string1);
console.log(typeof string1);

// - Single quotes:
const string2 = 'Hello with single quotes';
console.log(string2);
console.log(typeof string2);

// - Backtics (template literals) -> Alowing to embed variables and expresions:
const string3 = `Hello with backtics`
console.log(string3);
console.log(typeof string3);

// String concatenation:
const age = 36;
const name = "Johny";
const answer = "My name is: " + name + "\n" + "My age is: " + age;
console.log(answer);
const answerBackticks = `My name is: ${name} \nMy age is: ${age}`
console.log(answerBackticks);

const textWithQuotes = "And he called me - 'Deniss'";
console.log(textWithQuotes);

// Accessing characters:
const sampleString = 'Hello world!';
const firstNumber = sampleString[0]; // if indexing out of the string length -> undefined
console.log(firstNumber);

// String properties and methos
// Srings are primitive data type,
// but they have access to String,prototype methods and
// properties via automatic boxing

// - get length (property):
// Returns the total count of UTF-16 code units (16-bit chunks of data).
// Note: Standard letters count as 1; emojis and rare characters count as 2.
console.log(sampleString.length)

// - convert to upper case:
console.log(sampleString.toUpperCase());

// - convert to lower case:
console.log(sampleString.toLowerCase(sampleString));

// - find index of a substring (first occurence):
console.log(sampleString.indexOf('o'));

// - check if a string includes a substring:
console.log(sampleString.includes("world")); // true
console.log(sampleString.includes('bb')); // false

// - extract part of the string:
console.log(sampleString.slice(6)); // (start?: , end?: ) -> ? mean parameter is optional!
console.log(sampleString.slice(6, 11));
console.log(sampleString.substring(0, 5)); // (start: , end?:) -> start is is obligatory!
console.log(sampleString.substring(4, 7)); // o w
console.log(sampleString.substring(6)); // world!
// --> If the end > start, the JS switches the values.
// --> If the end > string length -> method goes till the end of string and stops. No error.

// - replace part of a string:
console.log(sampleString.replace("world", "everyone")); // replaces the first occurence of a character/substring
console.log(sampleString.replaceAll("l", "b"));

// - remove extra spaces at start and end
const justSentence = '         I like apples    ';
console.log(justSentence);
console.log(justSentence.trim());

// Combining methods:
const cleaned = justSentence.trim()
                            .toLowerCase()
                            .replace("apples", "bananas");
console.log(cleaned);

// Example task (reverse number):
let number = 49;
const reverseNumber = Number(String(number).replaceAll("49", "94")); // --> A bit hardcoded approach, the teachers one is better.
console.log(reverseNumber);
// Other way: using indexing! Using [1] + [0].
// Teachers way:
const numberAsString = String(number);
const stringResult =  `${numberAsString[1]} + ${numberAsString[0]}`;
const reversedNumv = Number(stringResult);
console.log(reverseNumber);

/*
- "", '', `` can be used to create strings
- backtics used when embedding variables and expressions
- use commons tring methods to solve different tasks
*/