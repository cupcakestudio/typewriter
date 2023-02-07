"use strict";
//globale var
//med hjælp fra Klaus
//stringtoType tager textContent af class .typewritten og fjerne space før og efter

//get class where text is stored
let stringtoType = document.querySelector(".typewritten");
//store textContent in input var
let input = stringtoType.textContent;
let maxNumber; // hvor mange gange loop skal max køre
let iteration = 0; //# af iteration som loop kører på
window.addEventListener("DOMContentLoaded", initLoop());

function initLoop() {
  //remove content of class. typewritten
  stringtoType.textContent = "";
  //set maxNumber to be length of text
  maxNumber = input.length;
  loop();
}
function loop() {
  if (iteration < maxNumber) {
    stringtoType.textContent += `${input[iteration]}`;
    iteration++;
    setTimeout(loop, Math.random() * 500);
  }
}
