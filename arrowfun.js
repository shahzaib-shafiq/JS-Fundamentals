

const calculateage = () => {

}


const calculateage2 = (a) => {
    console.log(a)
}

let myFunction = (a, b) => a * b;
document.getElementById("demo").innerHTML = myFunction(4, 5);



hello = () => {
    return "Hello World!";
}


let sum = (a, b) => a + b;

/* This arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert(sum(1, 2)); // 3


let numsum = (a, b) => {
    return a + b;
}

let res = numsum(4, 5)
console.log(res)
//   <!DOCTYPE html>
// <html>
// <body>

// <h1>JavaScript Functions</h1>
// <h2>The Arrow Function</h2>

// <p>This example shows the syntax of an Arrow Function, and how to use it.</p>

// <p id="demo"></p>

// <script>
// let hello = "";

// hello = () => {
//   return "Hello World!";
// }

// document.getElementById("demo").innerHTML = hello();
// </script>

// </body>
// </html>