// "use strict";
// // Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // Data needed for first part of the section
// const restaurant = {
//   name1: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
// };

// for (const day of Object.keys(restaurant.openingHours)) console.log(day);
// for (const time of Object.values(restaurant.openingHours.thu))
//   console.log(time);
// for (const entry of Object.entries(restaurant.openingHours.thu))
//   console.log(entry);

// // for ([key, value] of Onject.entries())
// for (const [key, { open, close }] of Object.entries(restaurant.openingHours))
//   console.log(`On ${key}, we open at ${open} and clost at ${close}`);

// console.log(restaurant.openingHours?.mon);
// console.log(restaurant.openingHours.sat?.closed);
// console.log(restaurant.openingHours.sat.close);

// // const [x, y, z] = [2, 3, 4];
// const [x, y, ...z] = [2, 3, 4, 5, 6];
// console.log(x, y, z); // z becomes a new array [4, 5, 6] - only select the rest elements and ...z (rest pattern) must be the last element

// console.log(x, y, z);

// let [a, b, c] = [1, 2];
// console.log(a, b, c); // c will be undefined, but we can set up default value for each variable
// [a = 0, b = 0, c = 0] = [1, 2]; // use "=" to set up default value
// console.log(a, b, c);

// const [e, f, [g, h]] = [11, 22, [33, 44]]; // to get variables for each element

// const [first, second] = restaurant.categories;
// const [st, , rd] = restaurant.categories;
// console.log(first, second);
// console.log(st, rd);

// const {
//   name1 = [],
//   openingHours = [],
//   categories = [],
//   memu = [],
// } = restaurant; // same as pyton
// console.log(name1, openingHours, categories);

// // Spread Operator
// const arr = [1, 2, 3];
// console.log([...arr]);
// console.log(arr);
// console.log(...arr);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);
// for (const item of menu) console.log(item);
// for (const item of menu.entries()) console.log(item);
// for (const [i, el] of menu.entries()) console.log(`${i + 1}: ${el}`);

// const str = "abcdefg";
// console.log(...str);

// /////////////////// Coding Challenge

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // const [players1, players2] = game.players;
// // console.log([players1, players2]);

// // const [gk, ...fieldPlayers] = players1;
// // console.log([gk, fieldPlayers]);

// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
// // console.log(players1Final);

// // const { team1, draw, team2 } = game.odds;
// // console.log(team1, draw, team2);

// // const printGoals = function () {
// //   let playerNum = Math.trunc(Math.random * 22 + 1);
// //   console.log();
// // };

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

// console.log(game.scored.entries());
for (const [idx, player] of game.scored.entries())
  console.log(`Goal ${idx + 1}: ${player}`);

const odds = Object.values(game.odds);
let avg = 0;
for (const odd of odds) avg += odd;
avg /= odds.length;
console.log(avg);

for (let [team, odd] of Object.entries(game.odds)) {
  if (team !== "x") {
    console.log(`Odd of victory ${game[team]}: ${odd}`);
  } else {
    console.log(`Odd of draw: ${odd}`);
  }
}

// for (const [idx, player] of Object.entries(game.scored)){
//   if (game.scored[idx] = )
// }
