"use strict";
//globale var
//med hjælp fra Klaus
//stringtoType tager textContent af class .typewritten og fjerne space før og efter

//get class where text is stored
let stringtoType = document.querySelector(".typewritten");
//store textContent in input var
let input = stringtoType.textContent.trim();
let maxNumber; // hvor mange gange loop skal max køre
let iteration = -1; //# af iteration som loop kører på
//inform the user to click on page before typewriting
alert("click on the page to see the typewriter");
window.addEventListener("DOMContentLoaded", initLoop);

function initLoop() {
  //remove content of class. typewritten
  stringtoType.textContent = "";
  //set maxNumber to be length of text
  maxNumber = input.length;
  window.addEventListener("click", loop);
}
function loop() {
  iteration++;
  let randSound = Math.floor(Math.random() * 2) + 1;
  if (iteration < maxNumber) {
    //match iteration input string with spaces , if true play space sound
    if (input[iteration] === " ") {
      //display the text in the typewritten class
      stringtoType.textContent += `${input[iteration]}`;
      document.querySelector("#typespace").play();
      document.querySelector("#typespace").currentTime = 0;
      setTimeout(document.querySelector("#typespace"), 50);
    } else {
      stringtoType.textContent += `${input[iteration]}`;
      document.querySelector("#typekey" + randSound).play();
      document.querySelector("#typekey" + randSound).currentTime = 0;
      setTimeout(document.querySelector("#typekey" + randSound), 50);

      console.log(randSound);
    }
  }
  setTimeout(loop, Math.random() * 500);
}
