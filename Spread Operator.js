arr = [4, 5, 6];

//extrnd the arr2 with the values of arr

arr2 = [1, 2, 3, ...arr];
console.log(arr);

//console.log(arr2);
console.log(...arr2);

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

  orderPasta: function (ingridient1, ingridient2, ingridient3) {
    `Pasta With ${ingridient1} , ${ingridient2}, ${ingridient3}`;
  },
};

const str = "Shahzaib";

const letters = [...str, "", "Shafiq"];

console.log(letters);

const newMenuCopy = [...restaurant.mainMenu, "Nuggets"];

console.log(newMenu);

const starterMenuCopy = [...restaurant.starterMenu];

//join 2 arrays

const CompleteManu = [...newMenu, ...mainMenuCopy];

//Or
const CompleteManu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];

console.log(CompleteManu2);

const ingridients = ["tomato", "potato", "vegies"];

restaurant.orderPasta(...ingridients);

let newResturant = { foundin: 1992, ...restaurant, founder: "Ahmed" };

console.log(newResturant);
