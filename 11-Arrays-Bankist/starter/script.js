"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ["USD", "United States dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// splice & slice`

const arr = ["a", "b", "c", "d", "e"];
const arrReverse = arr.reverse();
console.log(arrReverse);

console.log(arr.slice(2));
console.log(arr);

console.log(arr.splice(2));
console.log(arr); // original array has been changed because spliced part has been taken

const numbers = [65, 44, 12, 4];

const list = [
  {
    name: "Onur",
    age: 32,
  },
  {
    name: "Rachel",
    age: 29,
  },
];

console.table(list);

console.log(list.find(el => el.name === "Rachel"));

// Question 1, requested output: ['Onur is 32 years old', 'Rachel is 29 years old']
// You have to use array map function

const output = list.map(({ name, age }) => `${name} is ${age} years old`);
console.log(output);

// Question 2, get sum of everyone's age requested output: 61
// You have to use array reduce function

const totalAge = list.reduce(
  (accumulator, currentValue) => accumulator + currentValue.age,
  0
);
console.log(totalAge);

// Question 3, filter out names starting with 'R'. Requested output: [{name: 'Onur', age: 32}]
// You have to use array filter function

// const noR = list.filter(({ name, age }) => {
//   if (name[0] !== 'R') return name, age;
// });

const noR = list.filter(({ name }) => {
  if (name[0] !== "R") return true;
});
console.log(noR);

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = (dogsJulia, dogsKate) => {
  let dogsJuliaCopy = dogsJulia;
  const onlyDogsJ = dogsJuliaCopy.splice(1, 2);
  console.log(onlyDogsJ);

  const dogs = onlyDogsJ.concat(dogsKate);

  return dogs
    .map((age, idx) =>
      age >= 3
        ? `Dog number ${idx + 1} is an adult, and is ${age} years old`
        : `Dog number ${idx + 1} is still a puppy`
    )
    .join("\n");
};

console.log(checkDogs(dogsJulia, dogsKate));

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = ages => {
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );
  console.log(`Human age: ${humanAges}`);

  const adultDog = humanAges.filter(humanAge => humanAge > 18);
  console.log(adultDog);

  const avgAdultDogAge =
    adultDog.reduce((acc, age) => acc + age, 0) / adultDog.length;
  console.log(adultDog.reduce((acc, cur) => acc + cur, 0));

  console.log(`Avg adult dog age is ${avgAdultDogAge}`);

  // return avgAdultDogAge;

  const avgAdultDogAge2 = ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(humanAge => humanAge > 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

  console.log(arr);
  console.log(avgAdultDogAge2);

  return avgAdultDogAge2;
};

const avgAge1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avgAge2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(movements);
const eurToUsd = 1.1;

const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

/*
 array.every() 
 array.some()
 array.find() -- to find first element
 array.findLast()
 array.findIndex()
 array.sort() -- A to Z. For numbers, it is sorted as string

*/
const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());
// Expected output: Array [0, 1, 2, 3, 4]

const arr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arr2.flat(Infinity));
console.log(arr2.flat(3));
console.log(arr2.flat(2));
console.table(arr2.flat(3));
// Expected output: Array [0, 1, 2, Array [3, 4]]

console.log(movements);

// return <0, A, B (keep order)
// return >0,  B, A (switch order)

// Ascending
movements.sort((a, b) => {
  if (a > b) return 1;
  if (a === b) return 0;
  if (a < b) return -1;
});
console.log(movements);

// Refactor
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
movements.sort((a, b) => {
  if (a < b) return 1;
  if (a === b) return 0;
  if (a > b) return -1;
});
console.log(movements);

// Refactor
movements.sort((a, b) => b - a);
console.log(movements);

const empetyArr = new Array(7);
console.log(empetyArr);
console.log(empetyArr.fill(1, 0, 3));
console.log(empetyArr.fill(2, 1, 5));
console.log(empetyArr.fill(0));

const numArr = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(numArr);

const numArr2 = Array.from([1, 1, 1, 1], x => 2 * x);
console.log(numArr2);

console.log(Math.trunc(Math.random() * 6) + 1);
const ramDice = Array.from(
  { length: 100 },
  el => Math.trunc(Math.random() * 6) + 1
);
console.log(ramDice);

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

GOOD LUCK 😀
*/

let dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// Q1
const dogsWithRecommendedFood = dogs.map(dog => {
  return {
    ...dog,
    recommendedFood: Math.round(dog.weight ** 0.75 * 28),
  };
});
console.log(dogs);

// Q2

const foodChecker = dog =>
  dog.curFood > dog.recommendedFood ? "Eating too much" : "Easting too little";

const sarah = dogs.find(dog => {
  return dog.owners.includes("Sarah");
});
console.log(foodChecker(sarah));

// Q3

// const ownersEatTooMuch = dogs.every(
//   dog => ((foodChecker(dog) === 'Eating too much') dog)
//   return dog

// );
// console.log(ownersEatTooMuch);
let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

dogs.map(dog => {
  foodChecker(dog) === "Eating too much"
    ? ownersEatTooMuch.push(dog.owners)
    : ownersEatTooLittle.push(dog.owners);
});

ownersEatTooMuch = ownersEatTooMuch.flat();
ownersEatTooLittle = ownersEatTooLittle.flat();
console.log(ownersEatTooMuch, ownersEatTooLittle);

// Q4
// "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch.join(" and ")} 's dog eat too much!`);
console.log(`${ownersEatTooLittle.join(" and ")} 's dog eat too little!`);

// Q5
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

// Q6
// Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
const eatingOkayDogs = [];
const eatingOkayChecker = dogs.some((dog, _, arr) => {
  if (
    dog.curFood <= dog.recommendedFood * 1.1 &&
    dog.curFood >= dog.recommendedFood * 0.9
  )
    eatingOkayDogs.push(dog);
});

console.log(eatingOkayChecker);

// Q7
console.log(eatingOkayDogs);

// Q8
dogs.sort((a, b) => {
  if (a.recommendedFood > b.recommendedFood) return 1;
  if (a.recommendedFood < b.recommendedFood) return -1;
  if (a.recommendedFood === b.recommendedFood) return 0;
});
console.log(dogs);

// dogsWithRecommendedFood.sort(({recommendedFood: recommendedFood1}, {recommendedFood: recommendedFood2}) => {
//   return -1;
// });
