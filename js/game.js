let canvas;
let ctx;
let world;
let keyboard = new Keyboard();

function startGame() {
  level1 = createLevel1(world);
  initWorld();
  hide("start-screen");
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
  showScreen("win-screen");
  hide("game-controls-mobile");
  clearAllIntervals();
}

function gameOver() {
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

window.addEventListener("keydown", (event) => {
  if (event.key == "ArrowRight" || event.key == "d") {
    keyboard.RIGHT = true;
  }
  if (event.key == "ArrowLeft" || event.key == "a") {
    keyboard.LEFT = true;
  }
  if (event.key == "ArrowUp" || event.key == "w" || event.key == " ") {
    keyboard.UP = true;
  }
  if (event.key == "e") {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (event) => {
  if (event.key == "ArrowRight" || event.key == "d") {
    keyboard.RIGHT = false;
  }
  if (event.key == "ArrowLeft" || event.key == "a") {
    keyboard.LEFT = false;
  }
  if (event.key == "ArrowUp" || event.key == "w" || event.key == " ") {
    keyboard.UP = false;
  }
  if (event.key == "e") {
    keyboard.D = false;
  }
});
