// ---- Objects declaration ----
// Objects group related data and functions together as key-value pairs.
// Keys are strings(?), values can be any type.

const person = {
    name: 'Alice',
    age: 25,
    isStudent: true,
    "my email": "hh@example.com",
    hobbies: ["reading", "gaming", "running"],
    address: {
        street: "Long Drive",
        zip: "LV33601"
    },
    speak: function (word) {
        // console.log(this); // -> Returns the objects itself.
        console.log(`${this.name} is saying: ${word}`);
    },
    arrowSpeak: word => console.log(`${this.name} is saying: ${word}`)  // or sue person.name to not undefines, but not the best practice!

};
console.log(person);

// ---- Accessing Properties ----
// 1. Dot notation:
console.log(person.name);

// 2. Brackets notation - needed for special keys or when key is in a variable
const response = "hobbies"
console.log(person[response]);
console.log(person["name"]);
console.log(person["my email"]);

// 3. Nested:
console.log(person.address.zip);
console.log(person.hobbies[1]);

// - Updating properties:
person.age = 35;
person.isStudent = false;
console.log(person);

// - Adding new properties:
person.surname = 'Smith';
person["language"] = "english";
console.log(person);

// -  Deleting properties:
delete person.isStudent;
console.log(person);

// - Calling object methods:
person.speak("Hi!");
person.arrowSpeak("Hi!"); // Will not work because arrow function refer to outer/global object not in current one.
console.log(this);  // In Node.js, this refers to an empty object by default

// - Looping through object:
for (let key in person){
    console.log(`${key}: ${person[key]}`);
}

// - Object utility methods
console.log(Object.keys(person)); // Return an array of all the keys!
console.log(Object.values(person)); // Return an array of values
console.log(Object.entries(person)); // Return an array of [key, value] pairs
