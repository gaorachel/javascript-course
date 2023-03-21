"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////
/**
 * https://restcountries.com/v3.1/name/portugal" latest verison on March 2023
 */
// Old way
// const request = new XMLHttpRequest(); // Old-school way
// request.open("GET", src);
// request.send();
// // console.log(request.responseText);

// const num = "2222";
// console.log(typeof -num);

// Modern way
const src = "https://restcountries.com/v2/name/portugal";
const request = fetch(src);
console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(response => {
      // console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data[0]);
      const neighbour = data[0].borders[0];
      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/name/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => data[0]);

  // countriesContainer.style.opacity = 1;
};

getCountryData("portugal");

request.addEventListener("load", function () {
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  console.log(data.currencies.EUR.name);

  const html = `
  <article class="country ${"className"}">
  <img class="country__img" src="${data.flag}" />
  <div class="country__data">
    <h3 class="country__name">${data.name}</h3>
    <h4 class="country__region">${data.region}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)} people</p>
    <p class="country__row"><span>🗣️</span>${data.languages.por}</p>
    <p class="country__row"><span>💰</span>${data.currencies.name}</p>
  </div>
</article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
});
