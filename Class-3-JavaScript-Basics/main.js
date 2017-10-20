// JavaScript - ES6


// The console.log() command is used to print, or log, text to the console.
console.log("Hello!");






// Four primitive data types:

console.log('New York City');   // STRING
console.log(40.7);              // NUMBER
console.log(true);              // BOOLEAN
console.log(null);              // NULL






// DECLARING VARIABLES:

// Two ways to declare variables:

let a = 11;
console.log(a);

// We can change 'a' as following:
a = 13;
console.log(a);

const b = 12;   // Constant values do not change
console.log(b);
// b = 13;
// JavaScript will throw an error because you assigned a new value to a constant variable if above line is run. 






// STRING INTERPOLATION:

let myPet = 'dog';
console.log('I own a pet ' + myPet + '.');

// ES6 way:
let Pet = 'dog'
console.log(`I own a pet ${Pet}.`)  // Notice we are using ticks (`) not single quote.






// CONDITIONAL STATEMENTS:

// IF/ELSE:

let needsCoffee = true;
if (needsCoffee === true) {
    console.log('Drink coffee');
} else {
    console.log('Keep on asking!');
}

// IF / ELSE IF / ELSE:

let stopLight = 'green';

if (stopLight === 'red') {      // Notice '===' instead of '=='
    console.log('Stop');
} else if (stopLight === 'yellow') {
    console.log('Slow down');
} else if (stopLight === 'green') {
    console.log('Go!');
} else {
    console.log('Caution, unknown!');
}

// SWITCH:

let groceryItem = 'papaya';

switch (groceryItem) {
    case 'tomato':
        console.log('Tomatoes are red.');
        break;
    case 'lime':
        console.log('Limes are sour.');
        break;
    case 'papaya':
        console.log('Papayas are sweet.');
        break;
    default:
        console.log('Invalid item');
        break;
}






// ARRAY:

let bucketList = ['Climb Everest', 'Sky Dive', 'Road Trip'];

console.log(bucketList);

// Access Array:

let thingsToDo = ['Climb Everest', 'Sky Dive', 'Road Trip'];
console.log(thingsToDo[0]);

// Update Array:

let seasons = ["Winter", "Spring", "Summer", "Fall"];

seasons[3] = "Autumn";
console.log(seasons)

// Length:

thingsToDo = ['Climb Everest', 'Sky Dive'];
console.log(thingsToDo.length);

// Push / Pop:

thingsToDo.push("dam", "bag"); // To insert into array
console.log(thingsToDo);

thingsToDo.pop();  // To remove from array
console.log(thingsToDo);