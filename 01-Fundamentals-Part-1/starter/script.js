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
console.log(a, b)