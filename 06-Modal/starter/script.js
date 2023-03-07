"use strict";

const btnsShowModal = document.querySelectorAll(".show-modal");
const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const btnCloseModal = document.querySelector(".close-modal");
const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const modal = document.querySelector(".modal");
console.log(modal);
const overlay = document.querySelector(".overlay");
// const hidden = document.querySelectorAll;;('.hidden');
// console.log(hidden);

console.log(btnsShowModal);

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener("click", function () {
    openModal();
    console.log(`btn #${i + 1} clicked`);
  });
  // console.log(modal, overlay); // now "hidden" class has been removed from the class.
  btnCloseModal.addEventListener("click", closeModal);
}
