const x = 12;
const y = 10;

// Basic math operations:
console.log(x + y); // Addition
console.log(x - y); // Substraction
console.log(x * y); // Multiplication
console.log(x / y); // Division
console.log(x % y); // Modulo (Remainder after division)
console.log(x**y);  // Exponentiation

// Comparison operations:
console.log(x > y);
console.log(x < y);
console.log(x >= y);
console.log(x <= y);
console.log(x != y);
console.log(x !== y);
console.log(x == y);
console.log(x === y);

const yString = String(y);
console.log(yString == y); // true -> Applies the type conversion in the backend.
console.log(yString === y); // false -> Checks if the types are matching as well. -> Strict equality, revommentded

console.log(yString != y); // false -> Applies the type conversion in the backend.
console.log(yString !== y); // true -> Checks if the types are matching as well. -> Strict inequality, recommended

// Assignment operators:
// - simple assignment:
let z = 2

// - operation and assign
z += 3; // z = z + 3;
console.log(z);

z -= 1; // z = z - 1;
console.log(z);

z *= 3; // z = z *  3;
console.log(z);

z /= 2; // z = z / 3;
console.log(z);

z **= 2; // z = z**2;
console.log(z);

// Post-incrementation/post-decremenetation;
z++;
console.log(z);

z--;
console.log(z);

// Pre-incrementation/pre-decrementation (behaviour as in other languages):
console.log(z++); // 36 -> First print, then increment
console.log(++z); // 38 -> First increment, then print

console.log(z--); // 38 -> First print, then decrement
console.log(--z); // 36 -> First decrement, then print

// Logical Operations:
// AND - both conditions must be true:
if (x === 12 && y === 10) {
    console.log('YES');
}

// OR - at least one condition must be true
if(x === 12 || x === 9) {
    console.log('YES2');
}

// NOT - negates a boolean value
if(!(x !== 12)) {
    console.log('YES3');
}