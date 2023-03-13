// "use strict";
// // Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name1: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

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

const foodSet = new Set([
  "pizza",
  "bread",
  "pasta",
  "bread",
  "pasta",
  "soup",
  "soup",
]);
console.log(foodSet);
console.log(foodSet.has("soup"));
console.log(foodSet.add("potato"));
console.log(foodSet);
console.log(foodSet.delete("bread"));

for (const food of foodSet) console.log(food);

const arrFoodSet = [...foodSet];
console.log(arrFoodSet);
console.log(foodSet.size);
console.log(arrFoodSet.size); // wrong

const rest = new Map();
rest.set("name", "big easy");
rest
  .set("foodType", "turkish")
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "our are closed");
console.log(rest);

console.log(rest.get("open"));

const currentTime = 10;
console.log(
  rest.get(currentTime > rest.get("open") && currentTime < rest.get("close"))
);
console.log(rest.has("foodType"));

console.log(rest.size);

const question = new Map([
  ["question", "what is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "Python"],
  [4, "JS"],
  ["answer", 4],
  [true, "correct!"],
  [false, "try again!"],
]);

console.log(question);
const openingHourMap = new Map(Object.entries(restaurant.openingHours));
console.log(openingHourMap);

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your Answer"));
// console.log(question.get(answer === question.get("answer")));

// Convert Map to Array
console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

console.log(new Set(gameEvents.values()));

const eventsOjb = Object.fromEntries(gameEvents);
const eventsUnique = new Set(gameEvents.values());
const events = [...eventsUnique];
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const eventsNum = gameEvents.size;
console.log(`An event happened, on average, every ${90 / eventsNum} minutes`);

// const eventsOjb = Object.fromEntries(gameEvents);

for ([time, theEvent] of gameEvents) {
  const half = time <= 45 ? "[FIRST HALF]" : "[SECOND HALF]";
  console.log(`${half} ${time}: ${theEvent}`);
}

const airline = "Turkish Airline";
const plane = "A380";

console.log(plane[0]);
console.log(airline.indexOf("r")); // only show the first index one
console.log(airline.lastIndexOf("r")); // show the last index one
console.log(airline.indexOf("Turkish")); // casesensitive
console.log(airline.indexOf("turkish"));
console.log(airline.slice(4)); // sub-string start at index 4
console.log(airline.slice(4, 9)); // sub-string start at index 4 and end at (9-1)
console.log(airline.slice(-2)); // start counting at the end
console.log(airline.slice(1, -1)); // start at index 1 and end at index (-1-1) === -2

const x = "door door door";
console.log(x.replaceAll("door", "gate"));

const flight = "Airbus a320";
const flightCap = flight.cap;
const flightUpper = flight.toUpperCase();
console.log(flightUpper);
console.log(flight.startsWith("Air")); // case sensitive
console.log(flight.endsWith("flight"));

console.log("a+very+nice+string".split("+"));
console.log("firstname last name".split(" "));
const [firstName, lastName] = "firstname last name".split(" ");
console.log([firstName, lastName]);
const newName = ["Ms", "firstName", "LastName"].join(" ");
console.log(newName);

const msg = "lets go";
console.log(msg.padStart(10, "+").padEnd(30, "-"));
console.log("test".padStart(5, "+").padEnd(5, "+"));

const maskCreditCard = function (num) {
  const str = `${num}`;
  const last4 = str.slice(-4);
  console.log(last4.padStart(str.length, "*"));
};

maskCreditCard(0000444412340987);

console.log("🐷".repeat(5));

///////////////////////////////////////
// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

const convertor = function () {
  const text = document.querySelector("textarea").value;
  console.log(text);
  const rows = text.split("\n");
  console.log(rows);

  // for ([idx, row] of rows.entries)

  let i = 1;
  for (const row of rows) {
    const [a, b] = row.trim().toLowerCase().split("_");
    // console.log(a, b);
    // console.log(b[0].toUpperCase());
    // console.log(b.slice(1, b.length + 1));
    // const capb = b.replace(b[0], b[0].toUpperCase());
    const capb = b[0].toUpperCase() + b.slice(1, b.length + 1);
    const ab = a + capb;
    console.log(`${ab.padEnd(20, " ")}${"✅".repeat(i)}`);
    i++;
  }
};

document.querySelector("button").addEventListener("click", convertor);

// const [xx, yy] = " first_name".trim();
// console.log(xx[0]);
