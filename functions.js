// --- Function declaration --- 

// 1. Classic
//Function with no parameter:
function greet(){
    console.log("Hello!"); // In the scope of the function!
}

greet();
greet();

// Function with parameter:
function greetPerson(name){
    console.log(`Hello, ${name}!`);
}

greetPerson("Anna");
greetPerson("Johny");

// Function with return value:
function add(a, b){
    return a + b;
    // No code after 'return' is executed!
}
let sum = add(5, 7);
console.log(++sum);
const sum2 = add(sum, sum);
console.group(sum2);

// Hoisting of classical functin init
// Functions are hoisted type? You can call them before you initialized them?



// Function expression --> Not Hoisted?:
const multiply = function(a, b) {
    return a * b;
}

console.log(multiply(4, 7));

// Arrow function:
const substract = (a, b) => {
    return a - b;
}

console.log(substract(7, 1));

const shortArrow = x => String(x); // Can be used only for one parameter!
console.log(typeof shortArrow(6))

// Scoping:
let globalVar = 'I am global';

function showScope(){
    let localVar = 'I am local';
    console.log(localVar); // Not accessible outside function scope
    console.log(globalVar);  // Accessible outside and inside of the function scope
}

showScope();

function reverseNumber(number){
    return Number(String(number)[1] + String(number)[0]);
}
console.log(reverseNumber(49));

const shortReverseNumber = number => Number(String(number)[1] + String(number)[0]);
console.log(shortReverseNumber(49));

function isEven(number){
    if (number % 2 === 0){
        return 'Even';
    } else {
        return 'Odd';
    }
}

console.log(isEven(10));
console.log(isEven(11));

// Ternary Operator:
const shortIsEven = number =>  number % 2 === 0 ? "Even" : "Odd";
console.log(shortIsEven(10));

/*
* Function declaration are hoisted and an be called before defined (by lines of code)
* Function expression are not hoisted?
* Use parameters to make function reusable and dynamic
* Use return to send bck to the caller
*/

