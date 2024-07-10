
// JavaScript has 8 Datatypes
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

// The Object Datatype
// The object data type can contain both built-in objects, and user defined objects:

// Built-in object types can be:

// objects, arrays, dates, maps, sets, intarrays, floatarrays, promises, and more.


let country = 'Portugal';
let continent = 'Europe';
let population = 10;
console.log(country);
console.log(continent);
console.log(population);


let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);





// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


//JavaScript evaluates expressions from left to right.Different sequences can produce different results:
let x = "Volvo" + 16 + 4;

let x = 16 + 4 + "Volvo";


let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String
