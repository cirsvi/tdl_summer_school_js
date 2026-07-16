// --- Map
// - A map is a collection of key-value pairs
//   where the keys and values can be of
//   any type.
//   It is a built-in class.
const emptyMap = new Map();
const filledMap = new Map([["name", "Bob"], [2, 3], [true, false]]);

console.log(emptyMap);
console.log(filledMap);

// - Adding entries:
emptyMap.set("age", 27);
emptyMap.set([1, 2, 3], [4, 5, 6]);
console.log(emptyMap);

// - Accessing values and checking key existance:
console.log(emptyMap.get("age"));

console.log(emptyMap.has("age")); // true
console.log(emptyMap.has("email")); // false

// - Deleting entries:
emptyMap.delete("age");
console.log(emptyMap);

// - Size of map:
console.log(emptyMap.size);

// - Iterating (for ... of):
for(let entry of filledMap){
    console.log(entry);
}

// - Task:
function groupByFirstChar(strArray){
    const groupedByLetterMap = new Map();
    
    for(let i = 0; i < strArray.length; i++){
        const firstChar = strArray[i][0];

        if(!groupedByLetterMap.has(firstChar)){
            groupedByLetterMap.set(firstChar, []);
        }

        groupedByLetterMap.get(firstChar).push(strArray[i]);
    }

    return groupedByLetterMap;
}

const fruitArray = ['apple', 'banana', 'apricot', 'blueberry', 'avocado', 'orange'];
console.log(groupByFirstChar(fruitArray));


// --- Sets
// - A set is a collection of unique values only (just like Python).
// - Meaning no duplicates!

const emptySet = new Set();
const filledSet = new Set([1, 2, 3, 1, 4, 3, "Tom", "John", "Tom"]);

console.log(emptySet);
console.log(filledSet); // Set(6) { 1, 2, 3, 4, 'Tom', 'John' }

// - Adding values:
emptySet.add(1);
emptySet.add("hello");
emptySet.add(true);
emptySet.add(1);
emptySet.add(1);
console.log(emptySet);

// - Checking that value exists:
console.log(emptySet.has(1));

// - Deleting values:
emptySet.delete(1);
console.log(emptySet);

// - Size:
console.log(emptySet.size);

// Iteration (for ... of):
for(let item of filledSet){
    console.log(item);
}

// - Convert set to array:
const uniqueArray = Array.from(filledSet);
console.log(uniqueArray);

// - Task:
// function intersectFunction(array1, array2){
//     const set1 = new Set(array1);
//     const set2 = new Set(array2);
//     const intersection = [];

//     for(let val of set1){
//         if(set2.has(val)){
//             intersection.push(val);
//         }
//     }
//     return intersection;
// }

console.log(intersectFunction([1, 2, 2, 3, 4], [2, 3, 5, 2]));

function intersectFunction(array1, array2){
    const set1 = new Set(array1);
    const set2 = new Set(array2);
    return Array.from(set1).filter(value => set2.has(value));
}