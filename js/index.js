// const navToggle = document.querySelector(".nav-toggle");
// const navLinks = document.querySelectorAll(".nav-link");

// navToggle.addEventListener("click", () => {
//   document.body.classList.toggle("nav-open");
// });

// navLinks.forEach((link) => {
//   link.addEventListener("click", () => {
//     document.body.classList.remove("nav-open");
//   });
// });

// const TypeWriter = function (txtElement, words, wait = 1000) {
//   this.txtElement = txtElement;
//   this.words = words;
//   this.txt = "";
//   this.wordIndex = 0;
//   this.wait = parseInt(wait, 12);
//   this.type();
// };

// // Type Method
// TypeWriter.prototype.type = function () {
//   // Current index of word
//   const current = this.wordIndex % this.words.length;
//   // Get full text of the current word
//   const fullTxt = this.words[current];

//   // Check if deleting
//   if (this.isDeleting) {
//     // Remove char
//     this.txt = fullTxt.substring(0, this.txt.length - 1);
//   } else {
//     // Add char
//     this.txt = fullTxt.substring(0, this.txt.length + 1);
//   }

//   // Insert txt into element
//   this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//   // Initial Type speed
//   let typeSpeed = 50;

//   setTimeout(() => this.type(), typeSpeed);
// };

// // Init on DOM load
// document.addEventListener("DOMContentLoaded", init);
// // Init App
// function init() {
//   const txtElement = document.querySelector(".txt-type");
//   const words = JSON.parse(txtElement.getAttribute("data-words"));
//   const wait = txtElement.getAttribute("data-wait");
//   // Init TypeWriter
//   new TypeWriter(txtElement, words, wait);
// }
