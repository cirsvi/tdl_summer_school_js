// ---- For loop ----
// The most common loop when you know how many times to repeat:
// The syntax is the same as JAVA and C++
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

const  array1 = [14, 5, 6, 90, 56];
console.log();
for(let i = 0; i < array1.length; i++){
    console.log(array1[i]);
}

console.log();
for (let i = 10; i >= 0; i -= 2){
    console.log(i);
}
console.log();

// ---- While Loop ----
// Useful when you don't know how many timee it will loop
// and only have a condition

let j = 1;
while (j <= 5) {
    console.log(j++);
    //j++; // Without increment will lead to the infinite loop!
}
console.log();

// ---- Do-While Loop ----
// Similar to while, but always runs at least ones
// Also used in C++ and JAVA
let y = 1;
do{
    console.log(y);
    y++;
} while (y <= 5)
console.log();

// ---- Break and continue ----
for (let i = 0; i <= 10; i++){
    if (i === 6){
        console.log(`Stopping at ${i}.`);
        break;
    }
    console.log(i);
}
console.log();

for (let i = 0; i <= 10; i++){
    if (i === 6){
        console.log(`Skipping at ${i}.`);
        continue;
    }
    console.log(i);
}
console.log();

// ---- Tasks ----

distances = [10, 8, 15, 5]
batteryCapacity = 30

// function deliverPackages(distances, battery){
//     let i = 0;
//     while(battery - distances[i] >= 0){
//         battery -= distance[i++];
//     }
//     return distances.slice(0, i);
// }

// const deliverPackages = (distances, battery) => {
//     let i = 0;
//     while(battery - distances[i] >= 0){
//         battery -= distances[i++];
//     }
//     return distances.slice(0, i);
// }

// console.log(deliverPackages(distances, batteryCapacity));


const deliverPackages = (distances, battery) => {
    for (let i = 0; i < distances.length; i++){
        battery -=distances[i];
        if (battery < 0){
            return distances.slice(0, i);
        }
    }
    return distances; // return case if the battery is bigger than the distances total.
}

console.log(deliverPackages(distances, batteryCapacity));

const surviveDungeon = (rooms) => {
    let health = 100;
    
    for(let i = 0; i < rooms.length; i++){
        health += rooms[i];

        if (health > 100) { health = 100; }
        if (health <= 0) { return 0; }
    }
    return health;
}

console.log(surviveDungeon([-20, -30, 10, -40, 20]));
console.log(surviveDungeon([-50, -30, -40, 100]));