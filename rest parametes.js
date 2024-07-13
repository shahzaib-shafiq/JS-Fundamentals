const [a, b, ...arr2] = [1, 2, 3, 4, 5, 6, 7, 77, 6, 5, 4, 54, 56, 7, 5, 4];

console.log(a, b, arr2);

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
const [pizza, otherItems] = ["Veggiee Pizza", restaurant.mainMenu];

const { sat, ...wekdays } = restaurant.openingHours;
console.log(sat, wekdays);

let add = function (...numbers) {
  let sum = 0;

  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};

console.log(add(3, 4));
console.log(add(3, 4, 4));
console.log(add(3, 4, 5, 6, 7));
console.log(add(3, 4, 3, 4, 5, 6, 7, 8));

const x = [34.5, 65, 6, 7];
