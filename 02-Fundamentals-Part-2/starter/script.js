///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// // console.log(typeof calcAverage);

// let avgScoreDolphins = calcAverage(44, 23, 71);
// let avgScoreKoalas = calcAverage(65, 54, 49);
// // console.log(`avgDolphins: ${avgDolphins}, avgKoalas: ${avgKoalas}`);

// // function checkWinner(avgDolphins, avgKoalas) {
// //   if (avgDolphins > avgKoalas) {
// //     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
// //   } else if (avgKoalas > avgDolphins) {
// //     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
// //   } else {
// //     console.log("No winner.");
// //   }
// // }

// function checkWinner(avgDolphins, avgKoalas) {
//   return avgDolphins >= avgKoalas * 2
//     ? console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
//     : console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
// }

// checkWinner(avgScoreDolphins, avgScoreKoalas);

// const friends = ["Onur", "Rachel", "Peter"];
// const [onur, rachel] = friends;

// console.log(friends[0]); // same as python :D
// // console.log(friends[-1]);
// // in ES2022 there is a new func called Array.at()

// console.log(friends.at(-1)); // ES2022 new way
// console.log(friends[friends.length - 1]); // traditional way

// friends[2] = "Jane"; // we can replace elements inside of one array but we cannot change entire array.

// console.log(friends);

// friends.push("John", "Ash"); // add elements to the array. Can be more than one element.
// console.log(friends);

// friends.unshift("Ben", "Kara"); // add elements to the beginning
// console.log(friends);

// friends.pop(); // remove last element
// console.log(friends);
// console.log(friends.pop());

// friends.shift(); // remove first element
// console.log(friends);

// console.log(friends.indexOf("Rachel"));
// console.log(friends.indexOf("Bob")); // the result will be -1 which means this element is not in the array

// console.log(friends.includes("Rachel")); // reture a boolean

// // use case
// if (friends.includes("Rachel")) {
//   console.log("Rachel is in the array");
// }

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// function calcTip(bill) {
//   if (bill >= 50 && bill <= 300) {
//     return bill * 0.15;
//   } else {
//     return bill * 0.2;
//   }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(`Tips: ${tips}`);
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(`Total: ${totals}`);

const personalInfo = {
  firstName: "Rachel",
  lastName: "Gao",
  age: 29,
  job: "Data Analyst",
  favFood: ["Rice Pudding", "Chicken Katsu", "bread"],
};

const countryLocation = prompt("where are you live?");
personalInfo["location"] = countryLocation;
console.log(personalInfo);

console.log(personalInfo.favFood[0]);
// console.log(personalInfo[favFood[0]]); // this is wrong
