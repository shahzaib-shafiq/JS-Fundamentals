// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

person.friends = ['Ali', 'Ahmed', 'SS', 'DS', 'ER']



person.friends


person.location = 'Islamabad'


person['LinkedIn'] = 'https://pk.linkedin.com/in/shahzaib-shafiq'


person.LinkedIn

person['lastName']
person['LinkedIn']
person['location']


// console.log(`name is ${person.firstName} and location is ${person['location']}`)

// Create an Object
const person33 = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//Object Type Person
function Person4(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}


let n = 'Name'


console.log(Person4.lastName)

const myFriend = new Person4("John", "Doe", 50, "blue");


const mySelf = new Person4("Shahzaib", "Shafiq", 22, "green");




function Person2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "English";
}



//Object Methods


// Create an  new Object
const persons = {


    calcage: function () {
        console.log(this)
        this.birthyear = 2024 - this.age
    },

    getSummary: function () {


        console.log(`name is ${this.firstName} is ${this.age})} years old and 
        His eyeColour and he has ${this.hasDrivingLicence ? 'a' : 'does not'} a driving licience       
        ${(this.eyeColor)}
                
                
                `)


    }

};

// Add Properties
persons.firstName = "John";
persons.lastName = "Doe";
persons.age = 32
persons.eyeColor = "blue";
persons.location = 'Islamabad'
persons['LinkedIn'] = 'https://pk.linkedin.com/in/shahzaib-shafiq'
persons.friends = ['Ali', 'Ahmed', 'SS', 'DS', 'ER']
persons.hasDrivingLicence = false


// console.log(persons.calcage(persons['age']))

// console.log(persons.calcage(persons.age))



console.log(persons.calcage())

console.log(persons.age)

console.log(persons.birthyear)


console.log(persons.getSummary())


const Shahzaib = {
    fullname: "Shahzaib",
    mass: 60,
    height: 5.1,
    calcbmi: function () {
        return (this.mass) / (this.height ** 2)
    }

}

let bmi = Shahzaib.calcbmi()
console.log(bmi)

const mark = {
    fullname: "Mark",
    mass: 82,
    height: 6.1
}

// To use the calcbmi method for both the Shahzaib and Mark objects, 
//you can refactor the method into a standalone function 
//that accepts an object with mass and height properties. Here's how you can modify your code

// Define a function to calculate BMI
function calcbmi(person) {
    return person.mass / (person.height ** 2);
}

// // Define Shahzaib object
// const Shahzaib = {
//     fullname: "Shahzaib",
//     mass: 60,
//     height: 5.1
// };

// // Calculate BMI for Shahzaib using the function
// let shahzaibBMI = calcbmi(Shahzaib);
// console.log(`BMI of ${Shahzaib.fullname}: ${shahzaibBMI}`);

// // Define Mark object
// const Mark = {
//     fullname: "Mark",
//     mass: 82,
//     height: 6.1
// };

// // Calculate BMI for Mark using the function
// let markBMI = calcbmi(Mark);
// console.log(`BMI of ${Mark.fullname}: ${markBMI}`);


// In this refactored approach:

// The calcbmi function is defined separately outside any object. It takes a person parameter which is expected to have mass and height properties.
// You define Shahzaib and Mark objects with their respective mass and height properties.
// To calculate BMI for each person, you simply call the calcbmi function and pass the respective object (Shahzaib or Mark) as an argument.
// The calculated BMI is then logged to the console for each person.
// This way, you avoid duplicating the calcbmi method within each object, making your code cleaner and more maintainable. Each object (Shahzaib and Mark) retains its unique properties (fullname, mass, height) and you use a shared function (calcbmi) to compute the BMI based on these properties.



