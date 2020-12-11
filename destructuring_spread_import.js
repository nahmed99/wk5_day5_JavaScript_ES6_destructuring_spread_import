// Array destructuring - create a variable from element(s) in an array

const names = ['Fred', "Kate", 'Cindy', "Rick", 'Keith'];

const [a, b, , c] = names; //creates the variable that exists in the array, using the position of, i.e., [0, 1, , 3] for the example above so that a = 'Fred' and b = 'Kate' and c = 'Rick'. Equivalent to:
//
// const a = names[0];
// const b = names[1];
// const c = names[3];

console.log("Destructuring:", c);



// The spread operator: ... (three dots we put before an array variable)
// It grabs all the values from an array and spreads them into argument values.

/*
function printNames(name1, name2, name3, name4, name5) {
    console.log("Spread", name1);
    console.log("Spread", name2);
    console.log("Spread", name3);
    console.log("Spread", name4);
    console.log("Spread", name5);
}

printNames(...names); //spread the array across the parameters that the funciton is axpecting.
*/


// Combining destructuring and spread:

const [fred, kate, ...theRest] = names; //theRest will contain a copy of the remaining elements in the names array into a new (smaller) array. The ...variable_name needs to be the last one in the square brackets.

console.log("Combined destructuring and spread", kate);
console.log("Combined destructuring and spread", theRest); 


// Object destructuring

const person = {
    name: "Kidda",
    age: 39
};

// 'Normal' way to access values from an object:
const agePerson = person.age;
console.log("Age from person object", agePerson);

// Destructuring the object, example - the curly brackets need to contain the key used in the object:

// const {name} = person;
// console.log("Name from person object", name);

const {age, name} = person;
console.log(`${name} is ${age} years old.`);
