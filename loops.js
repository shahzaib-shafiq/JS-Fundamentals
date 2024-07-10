
// const arr = []
// for (let i = 0; i <= 1000; i++) {
//     let num = 0;
//     num = num + 1;
//     arr.push('a' + num)
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(arr[i])
// }


//const person = {};


friends = ['Ali', 'Ahmed', 'SS', 'DS', 'ER', 'Ali', 'Ahmed', 'SS', 'DS', 'ER', 'Ali', 'Ahmed', 'SS', 'DS', 'ER', 'Ali', 'Ahmed', 'SS', 'DS', 'ER']

// for (let i = 0; i < friends.length; i++) {
//     console.log(friends[i])
// }




years = [1993, 1923, 2004, 2007, 2002, 2005, 2010, 2021, 2023]
ages = []

for (let i = 0; i < years.length; i++) {
    ages.push(2024 - years[i])
}


for (let i = 0; i < years.length; i++) {
    console.log(ages[i])
}

// /reversed loop/  
for (let i = years.length; i >= 0; i--) {
    console.log(ages[i])
}





const array = [1, 2, 3, 4, 5];



// nested loops

// Example 2D array (matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Nested loops to iterate over each element in the matrix
for (let i = 0; i < matrix.length; i++) {       // Outer loop iterates over rows
    for (let j = 0; j < matrix[i].length; j++) {  // Inner loop iterates over columns
        console.log(matrix[i][j]);               // Accessing each element in the matrix
    }
}


// Example of nested arrays
const nestedArrays = [
    [1, 2],
    [3, 4, 5],
    [6],
    [7, 8, 9, 10]
];

// Nested loops to iterate over each element in the nested arrays
for (let i = 0; i < nestedArrays.length; i++) {              // Outer loop iterates over outer array elements
    for (let j = 0; j < nestedArrays[i].length; j++) {       // Inner loop iterates over inner array elements
        console.log(nestedArrays[i][j]);                     // Accessing each element in the nested arrays
    }
}

//for each loops
array.reverse().forEach(element => {
    console.log(element);
});

var i = 0
//while loops
while (i < 10) {
    text += "The number is " + i;
    i++;
}


do {
    text += "The number is " + i;
    i++;
}
while (i < 10);



// for each loop
let students = ['John', 'Sara', 'Jack'];

// using forEach
students.forEach(myFunction);

function myFunction(item) {

    console.log(item);
}