'use strict';

const upperFirstWord = str => {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

const transformer = (str, func) => {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${func(str)}`);
  console.log(`Tansformaed by ${func.name}`);
};

transformer('zhu zhu blablabla', upperFirstWord);

const greet = greeting => name => console.log(`${greeting} ${name}`);
//   return function (name) {
//     console.log(`${greeting} ${name}`);

console.log(greet('hey'));

const greeterHey = greet('hey');
greeterHey('Zhu');

// greeter('Bu');
// console.log(greeterHey('Zhu'));

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(fligjtNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${fligjtNum}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${fligjtNum}`,
      name,
    });
  },
};

lufthansa.book(233, 'Rachel Gao');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const swiss = {
  airline: 'Swiss',
  iataCode: 'LX',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 233, 'Onur');
book.call(lufthansa, 233, 'Onur');
console.log(lufthansa);
console.log(eurowings);

lufthansa.plane = 100;
lufthansa.buyPlane = function () {
  console.log(this.plane);
  this.plane++;
};

// console.log(lufthansa.buyPlane.bind(lufthansa));

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 500));

// const addVAT = addTax.bind(null, 0.23); // set this as null

const addVAT = price => addTax(0.23, price);

console.log(`Price after VAT is [${addVAT(200)}]`);

///////////////////////////////////////
// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section 😃
//   answers: new Array(4).fill(0),
// };

// const textFormatter = function () {
//   let text = `${poll.question}\n`;
//   for (const option of poll.options.values()) {
//     text = text + `${option}\n`;
//   }
//   text = text + '(Write option number)';
//   return text;
// };

// const displayResults = function (answerArr, type = 'object') {
//   if (type) console.log(answerArr);
//   else console.log(`Poll results are ${answerArr.toString()}`);
// };

// const answerColletor = function () {
//   const answer = Number(prompt(textFormatter()));
//   if (answer in [0, 1, 2, 3]) this.answers[answer]++;
//   else alert('The input is wrong');

//   const answerArr = this.answers;
//   console.log(answerArr);
//   const type = typeof answerArr;
//   console.log(type);
//   displayResults(answerArr, type);

//   poll.registerNewAnswer = answerColletor.bind(poll);

//   document
//     .querySelector('.poll')
//     .addEventListener('click', poll.registerNewAnswer);
//   console.log(poll);

////// second solution
const poll2 = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer2 = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)}`
      )
    );
    console.log(answer2, typeof answer2);
    if (answer2 in [0, 1, 2, 3]) {
      this.answers[answer2]++;
      this.displayResults();
    } else {
      alert('The input is wrong');
    }
  },

  displayResults(type = 'array') {
    if (type === 'array') console.log(this.answer2);
    else if (type === 'string') {
      console.log(`Poll results are ${answerArr.toString()}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', registerNewAnswer.bind(poll2));

//   console.log(poll2)
