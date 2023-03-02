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


// ---- operators ----
const thisYear = 2023
const ageRachel = thisYear - 1993
const ageOnur = thisYear - 1990

console.log(ageRachel, ageOnur)

const firstName = 'Rachel'
const lastName = 'Gao'
console.log(firstName + ' ' + lastName)

let x = 10 + 5
console.log(`x = 10 + 5 is ${x}`)

x += 10 // x = x + 10
console.log(`x +=10 is ${x}`)

x *= 4
console.log(`x *= 4 is ${x}`)

x++ // x = x + 1
console.log(`x++ is ${x}`)

x--
console.log(`x-- is ${x}`)


console.log(ageOnur > ageRachel)
if (ageOnur > ageRachel) {
    console.log('Onur is older than Rachel.')
}
else console.log('Onur is not older than Rachel.')

const ifFullage = ageOnur >= 18
console.log(ifFullage)


// Useful info https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

console.log(thisYear - 1990 > thisYear - 2000)

let a, b;
a = b = 25 - 10 - 5 // a = b, b = 25 - 10 - 5
console.log(a, b);


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

let massMark
let massJohn
let heightMark
let heightJohn

function bmi(mass, height){
    return mass / height ** 2
}

massMark = 78
heightMark = 1.69
massJohn = 92
heightJohn = 1.95

// massMark = 95
// heightMark = 1.88
// massJohn = 85
// heightJohn = 1.76

const bmiMark = bmi(massMark, heightMark)
const bmiJohn = bmi(massJohn, heightJohn)

const markHigherBMI = bmiMark > bmiJohn

if (markHigherBMI) {
    console.log(`Mark's BMI is ${Math.round(bmiMark)} and John's BMI is ${Math.round(bmiJohn)}. 
So Mark has higher BMI is ${markHigherBMI}.`)
} else {
    console.log(`Mark's BMI is ${bmiMark.toFixed(2)} and John's BMI is ${bmiJohn.toFixed(2)}. 
So Mark's BMI is lower than John's.`)
}

