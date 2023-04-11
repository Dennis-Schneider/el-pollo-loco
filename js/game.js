let canvas;
let ctx;
let world;
let keyboard = new Keyboard();

// sounds
let backgroundMusic = new Audio("./audio/western-music.mp3");
let chickenSound = new Audio("./audio/chicken.mp3");
let bottleThrowSound = new Audio("./audio/bottle-throw.mp3");
let bottleSplashSound = new Audio("./audio/bottle-splash.mp3");
let winSound = new Audio("./audio/win.mp3");
let walkingSound = new Audio("./audio/walking.mp3");
let ouchSound = new Audio("./audio/ouch.mp3");
let gameOverSound = new Audio("./audio/gameover.mp3");

function startGame() {
  level1 = createLevel1(world);
  initWorld();
  hide("start-screen");
  playSound(backgroundMusic, 0.05);

  // checkForMobileStartGame();
}

function initWorld() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);
  // checkForMobile();
}

function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

function toggleVisibility(id) {
  let element = document.getElementById(id);
  if (element.classList.contains("d-none")) {
    element.classList.remove("d-none");
  } else {
    element.classList.add("d-none");
  }
}

function playSound(sound, volume) {
  sound.play();
  sound.volume = volume;
}

function toggleSounds() {
  let soundImg = document.getElementById("sound-image");
  if (soundImg.src.includes("_on")) {
    soundImg.src = "./img/icons/volume_off.svg";
    toggleAllSounds(true);
  } else if (soundImg.src.includes("_off")) {
    soundImg.src = "./img/icons/volume_on.svg";
    toggleAllSounds(false);
  }
}

function stopSound(sound) {
  sound.pause();
}

function toggleAllSounds(status) {
  backgroundMusic.muted = status;
  chickenSound.muted = status;
  bottleThrowSound.muted = status;
  bottleSplashSound.muted = status;
  winSound.muted = status;
  walkingSound.muted = status;
  ouchSound.muted = status;
  gameOverSound.muted = status;
}

function stopAllSounds() {
  stopSound(backgroundMusic);
  stopSound(chickenSound);
  stopSound(bottleThrowSound);
  stopSound(bottleSplashSound);
  stopSound(ouchSound);
}

function restartGame() {
  showScreen("start-screen");
}

function showScreen(name) {
  hide("loading-screen");
  hide("start-screen");
  hide("game-over-screen");
  hide("win-screen");
  display(name);
}

function hide(id) {
  document.getElementById(id).classList.add("d-none");
}

function display(id) {
  document.getElementById(id).classList.remove("d-none");
}

function win() {
  walkingSound.muted = true;
  showScreen("win-screen");
  hide("game-controls-mobile");
  clearAllIntervals();
  stopAllSounds();
}

function gameOver() {
  playSound(gameOverSound, 0.5);
  walkingSound.muted = true;
  stopAllSounds();
  showScreen("game-over-screen");
  hide("game-controls-mobile");
  clearAllIntervals();
}

function fullscreen() {
  let fullscreen = document.getElementById("canva-section");
  enterFullscreen(fullscreen);
}

function enterFullscreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.msRequestFullscreen) {
    // for IE11 (remove June 15, 2022)
    element.msRequestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    // iOS Safari
    element.webkitRequestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
}

// toggle Sound

// window.addEventListener("resize", function (event) {
//   checkForMobile();
// });

// function checkForMobile() {
//   const isMobile = navigator.userAgentData.mobile;
//   let cs = document.getElementById("canva-section");
//   let canvas = document.getElementById("canvas");
//   if (isMobile) {
//     cs.style.borderRadius = "0";
//     cs.style.height = "100vh";
//     cs.style.width = "100vw";
//   } else {
//     cs.style.borderRadius = "25px";
//     cs.style.height = "unset";
//     cs.style.width = "unset";
//   }
// }

// function checkForMobileStartGame() {
//   const isMobile = navigator.userAgentData.mobile;
//   if (
//     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
//       navigator.userAgent
//     )
//   ) {
//     display("game-controls-mobile");
//   } else {
//     hide("game-controls-mobile");
//   }
// }
