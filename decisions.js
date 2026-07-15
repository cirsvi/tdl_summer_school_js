//if... else if ... else

const name = 'Thomas';

if (name === 'John') {
    console.log('You are registered user.');
} else if (name === 'Thomas'){
    console.log("You are administrator.");
} else {
    console.log('You should register.');
}

// Switch decision structure
const day = "Saturday.";
switch(day){
    case "Monday": 
        console.log("Time to go to work!");
        break; //Obligatory part!
    case "Tuesday": 
        console.log("Hell!");
        break;
    case "Wednesday": 
        console.log("Middle of the week, half-way through.");
        break;
    case "Thursday": 
        console.log("Almost Friday!");
        break;
    case "Friday": 
        console.log("Weekend is coming!");
        break;
    default:
        console.log("Weekend!");
        break; // Optional! if at the end.
}


// var, let,  and const in scope
if (true) {
    const pet = "Dog";
    let animal = "Cat";
    var human = "Wendy";

    console.log(pet, animal, human);
}
const pet = "Hamster";
let animal = "Mouse";
console.log(pet, animal, human); 
// Printing without defying the  pet and animal
// in the module scope, will give error,
// but var is accessible -> BAD!
