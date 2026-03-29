var drumSounds = {
  w: "sounds/tom-1.mp3",
  a: "sounds/tom-2.mp3",
  s: "sounds/tom-3.mp3",
  d: "sounds/tom-4.mp3",
  j: "sounds/snare.mp3",
  k: "sounds/crash.mp3",
  l: "sounds/kick-bass.mp3"
};

var audioCache = {};

Object.keys(drumSounds).forEach(function (key) {
  audioCache[key] = new Audio(drumSounds[key]);
});

var drumButtons = document.querySelectorAll(".drum");

for (var i = 0; i < drumButtons.length; i++) {
  drumButtons[i].addEventListener("click", function () {
    playDrum(this.querySelector(".key").textContent.trim());
  });
}

document.addEventListener("keydown", function (event) {
  playDrum(event.key.toLowerCase());
});

function playDrum(key) {
  if (!drumSounds[key]) {
    return;
  }

  var sound = audioCache[key];
  sound.currentTime = 0;
  sound.play();

  var activeButton = document.querySelector("." + key + ".drum");
  if (!activeButton) {
    return;
  }

  activeButton.classList.add("pressed");
  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
