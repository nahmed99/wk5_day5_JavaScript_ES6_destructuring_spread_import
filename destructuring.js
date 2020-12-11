// Array destructuring - create a variable from an element without really accessing it

const names = ['Fred', "Kate", 'Cindy', "Rick", 'Keith'];

const [fred, rick] = names; //creates the variable as marked in the array, using the position of, i.e., [0, 1] for the example above so that fred = 'Fred' and rick = 'Kate'...

console.log(rick);

