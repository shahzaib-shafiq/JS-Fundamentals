"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const arr = [23, 4, 5, 7, 8, 9];

// let a = arr[0];
// let b = arr[1];
// let c = arr[2];
// let d = arr[3];

// console.log(a);
// console.log(b);

// console.log(c);
// console.log(d);

// const [w, x, y, z] = arr;

// console.log(w);
// console.log(x);
// console.log(y);
// console.log(z);

let [first, second] = restaurant.categories;

//swap elemets

console.log(first, second);

[first, second] = [second, first];

//skip 2nd element
//const [first, , second] = restaurant.categories;

console.log(first, second);

const [starter, mainCourse] = restaurant.order(2, 0);

console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];

//nested destructuring

//return whole nested array
const [i, , j] = nested;
console.log(i, j);

//return elements insides nested array
const [i2, , [j2, k2]] = nested;
console.log(j2, k2);

const { names, openingHours, categories } = restaurant;
console.log(names, openingHours, categories);

const [p, q, r] = [4, 5, 6];

console.log(p, q, r);

const [p2 = 1, q2 = 1, r2 = 1] = [4, 5];

console.log(p2, q2, r2);
