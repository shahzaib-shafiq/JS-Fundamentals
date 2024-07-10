// Basic Array Methods
// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()

// See Also:
// Search Methods
// Sort Methods
// Iteration Methods	Array shift()
// Array unshift()
// Array delete()
// Array concat()
// Array copyWithin()
// Array flat()
// Array splice()
// Array toSpliced()
// Array slice()


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;


const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();


// et the third element of fruits using at():


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[2];


const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.at(2);





// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
// Result:

// Banana * Orange * Apple * Mango






// JavaScript Arrays
// The toString() Method
// The toString() method returns an array as a comma separated string:

// Banana,Orange,Apple,Mango





// The pop() method removes the last element from an array:

// Example
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits2.pop();


// The push() method adds a new element to an array (at the end):

//Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");


// The push() method returns the new array length:

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.push("Kiwi");

// The shift() method removes the first array element and "shifts" all other elements to a lower index.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();



// The shift() method returns the value that was "shifted out":

// Example

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits.shift();



// JavaScript Array length
// The length property provides an easy way to append a new element to an array:

// Example
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits[fruits.length] = "Kiwi";


// Warning !
// Using delete() leaves undefined holes in the array.

// Use pop() or shift() instead.

// Example

const fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];

//The concat() method creates a new array by merging (concatenating) existing arrays:
// Example (Merging Two Arrays)


const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);


const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);



// const arr1 = ["Emil", "Tobias", "Linus"];
// const myChildren = arr1.concat("Peter"); 



// Copy to index 2, all elements from index 0:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);




console.log(fruit.indexOf('Apple'))
//return 2


console.log(fruit.indexOf('Apple'))
//return 2

//returns true or false 
//this return false as n perter in fruits
console.log(fruit.includes('peter'))


let calcualtetips = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
}



const bills = [123, 456, 654]

const tips = [calcualtetips(bills[0]), calcualtetips(bills[1]), calcualtetips(bills[2]),]

console.log(tips)
