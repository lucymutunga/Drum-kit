const drums = document.querySelectorAll(".drum");
function handleClick(event) {
  let char = event.target.innerText;
  decideSound(char);
}
for (let i = 0; i < drums.length; i++) {
  let drum = drums[i];
  drum.addEventListener("click", (e) => handleClick(e));
}
function playSound() {
  let audio = new Audio("sound");
  audio.play();
}

function decideSound(char) {
  switch (char) {
    case "w":
      let tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
  }
  playSound(sound);
}
const body = document.querySelector("body");
body.addEventListener("keypress", (e) => handlePress(e));
function handlePress(e) {
  let key = e.key;
  decideSound(key);
}
