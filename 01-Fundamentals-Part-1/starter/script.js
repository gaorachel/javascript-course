// let js = 'amazing';
// // if (js === 'amazing') alert('js is fun!');
// console.log("biuuuuuuu")

// let num = 23;
// console.log(num)

// /*
//  Assignment 1
//  LECTURE: Values and Variables
//     1. Declarevariablescalled'country','continent'and'population'and assign their values according to your own country (population in
//        millions)
//     2. Logtheirvaluestotheconsole
//  */

// let country = "China"
// let continent = "Asia"
// let population = '14M'

// /**
//  * @param input string
//  */
// const someFunction = (input) => {
//     console.log('hello')
// }

// console.log(country, continent, population)

// // ------- Data Type -------

// let thisIsTrue = true
// let thisIsNumber = 3333
// let thisIsString = "string"

// console.log(typeof thisIsTrue)
// console.log(typeof thisIsNumber)
// console.log(typeof thisIsString)

// let year
// console.log(year)
// console.log(typeof year)

// year = 2023
// console.log(year)
// console.log(typeof year)

// // ----- let, const, var ------

// const nochange = 1993
// // nochange = 2000 -- this will show error, cos we cannot change variable if it is a constant variable.
// console.log(nochange)

// // ---- operators ----
// const thisYear = 2023
// const ageRachel = thisYear - 1993
// const ageOnur = thisYear - 1990

// console.log(ageRachel, ageOnur)

// const firstName = 'Rachel'
// const lastName = 'Gao'
// console.log(firstName + ' ' + lastName)

// let x = 10 + 5
// console.log(`x = 10 + 5 is ${x}`)

// x += 10 // x = x + 10
// console.log(`x +=10 is ${x}`)

// x *= 4
// console.log(`x *= 4 is ${x}`)

// x++ // x = x + 1
// console.log(`x++ is ${x}`)

// x--
// console.log(`x-- is ${x}`)

// console.log(ageOnur > ageRachel)
// if (ageOnur > ageRachel) {
//     console.log('Onur is older than Rachel.')
// }
// else console.log('Onur is not older than Rachel.')

// const ifFullage = ageOnur >= 18
// console.log(ifFullage)

// // Useful info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

// console.log(thisYear - 1990 > thisYear - 2000)

// let a, b;
// a = b = 25 - 10 - 5 // a = b, b = 25 - 10 - 5
// console.log(a, b);

////////////////////////////////////////////////////////////
/*
Coding Challenge #1

Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:

    1. Store Mark's and John's mass and height in variables
    2. Calculate both their BMIs using the formula (you can even implement both versions)
    3. Createa Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
    § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
    § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
 */

// let massMark
// let massJohn
// let heightMark
// let heightJohn

// function bmi(mass, height){
//     return mass / height ** 2
// }

// massMark = 78
// heightMark = 1.69
// massJohn = 92
// heightJohn = 1.95

// // massMark = 95
// // heightMark = 1.88
// // massJohn = 85
// // heightJohn = 1.76

// const bmiMark = bmi(massMark, heightMark)
// const bmiJohn = bmi(massJohn, heightJohn)

// const markHigherBMI = bmiMark > bmiJohn

// if (markHigherBMI) {
//     console.log(`Mark's BMI is ${Math.round(bmiMark)} and John's BMI is ${Math.round(bmiJohn)}.
// So Mark has higher BMI is ${markHigherBMI}.`)
// } else {
//     console.log(`Mark's BMI is ${bmiMark.toFixed(2)} and John's BMI is ${bmiJohn.toFixed(2)}.
// So Mark's BMI is lower than John's.`)
// }

// const thisYear = 2023
// console.log(thisYear)
// console.log(String(thisYear))
// console.log(thisYear)

// const nextYear = "2023"
// console.log(nextYear)
// console.log(Number(nextYear))
// console.log(nextYear)

// console.log('20' - 10 - '5')  // this works and the result is 5 as a number.
// console.log('20' / '5')  // works as well

// let n = '1' + 1 // this will be n = 11 as a number
// n = n - 1 // n = 10

// const age = '18'
// if (age == 18) {
//     console.log('this is a loose result')
// } else if (age === 18) {
//     console.log('this is a strick result')
// }

// const inputAge = prompt('How old are you???')  // the result of prompt func is always a string

// console.log(typeof inputAge)

// if (inputAge > 18) {
//     console.log('Okay you are an adult now.')
// } else if (inputAge !== 18) {
//     console.log('data type didnt match')
// } else if (Number(inputAge) === 18) {
//     console.log(typeof inputAge, inputAge)
// } else {
//     console.log('It seems you are still a baby :D')
// }

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

// function avgScore(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// const avgScoreDolphins = avgScore(97, 112, 101);
// const avgScoreKoalas = avgScore(109, 95, 123);

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
//   console.log("Dolphins WON!");
// } else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
//   console.log("Koalas WON!");
// } else {
//   console.log("DRAW!");
// }

// const scoreDolphins = [96, 88, 89];
// const scoreKoalas = [88, 91, 110];

// const min100 = (el) => el >= 100;
// if (scoreDolphins.some(min100)) {
//   console.log("Dolphins WON!");
// } else if (scoreKoalas.some(min100)) {
//   console.log("Koalas WON!");
// } else {
//   console.log("DRAW!");
// }

// const day = "Mon";
// if (day === "Wed") {
//   console.log("this is wed");
// } else if (day === "Thu") {
//   console.log("this is thu");
// } else {
//   console.log("the day is not wed or thu");
// }

// // Conditonal or Ternary Operator
// const age = 29;
// age >= 18
//   ? console.log("Congrats! you are an adult now")
//   : console.log("you are still a baby :D");

// const drink = age >= 18 ? "Beer" : "Water";
// console.log(drink);
// console.log(`I am allowed to drink ${age >= 18 ? "Beer" : "Water"}`);

// ////////////////////////////////////
// // Coding Challenge #4

// /*
// Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// 1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

// TEST DATA: Test for bill values 275, 40 and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// GOOD LUCK 😀
// */
// const bill = 275;
// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// console.log(`bill + tip is ${bill + tip}`);
