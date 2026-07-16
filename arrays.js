// Array Intialization:
const array1 = [1, 2, 3, 4, 5];
const string = "Hello";
const array2 = ["H", "e", "l", "l", "o"];
const array3 = ["Sophie", 30, true, undefined, [1, 2, 3]];

console.log(array1);
console.log(array3);

// Accessing elements:
console.log(array3[0]);
console.log(array3[0][1]);
console.log(array3[4][1]);

// Modifying elements:
array3[0] = "Tom";
console.log(array3[0]);

// Adding elements:
// .push() --> adds ement to the end of the array
array1.push(6);
console.log(array1);
// .unshift() --> adds elemnt to the start of the array
array1.unshift(0);
console.log(array1);

// Removing element:
// .pop() removes element from the end
array1.pop();
console.log(array1);

// .shift() removes elemnt from the start
array1.shift();
console.log(array1);

// Common array methods:
const cars = ["Tesla", "Toyota", "Mercedes"];

// - .map() - create a new array with transformed values -> new reference in a heap memory
const upperCars = cars.map(car => {
    return car.toUpperCase();
}) 
console.log(upperCars);


// - .filter() - creates a new array with elements that match the condition
const shortCars = cars.filter(car => car.length < 7);
console.log(shortCars);

function strArrayToNumbArray(strArray){
    numbArray = strArray.map(str =>{
                return str.length
    })
    return numbArray;
}

const fruits = ['apple', 'banana', 'pear', 'strawberry', 'orange'];
console.log(strArrayToNumbArray(fruits));

function strEndswithLetter(strArray, letter){
    return strArray.filter((str) => str.endsWith(letter));
}
console.log(strEndswithLetter(fruits, "e"));

// - .includes() - checks if array contains searched value
console.log(cars.includes("Toyota")); // the same as string
console.log(cars.indexOf("Toyota"))  //the same as string